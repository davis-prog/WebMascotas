using Microsoft.Owin.Security;
using RegistroDeMascotas.web.App_Start;
using RegistroDeMascotas.web.Core.Identity;
using RegistroDeMascotas.web.Models;
using System;
using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using System.Web;
using System.Security.Claims;

namespace RegistroDeMascotas.web.Controllers
{
    public class AccountController : Controller
    {
        private CustomUserManager CustomUserManager { get; set; }

        public AccountController() : this(new CustomUserManager()) { }

        public AccountController(CustomUserManager customUserManager)
        {
            CustomUserManager = customUserManager;
        }

        // GET: Account
        [AllowAnonymous] 
        public ActionResult Login(string returnUrl)
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToLocal(Core.Constantes.DefaultRedirect);
            }
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Login(LoginViewModel modelView, string returnUrl)
        {
            if (!ModelState.IsValid)
            {
                return View(modelView);
            }

            var result = await CustomUserManager.FindAsync(modelView.UserName, modelView.Password);

            if (result.Usuario != null)
            {
                await SignInAsync(result, true);
                return RedirectToLocal(returnUrl);
            }
            else
            {
                ModelState.AddModelError("", "Usuario o Constraseña incorrectos.");
            }

            return View(modelView);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LogOff(string returnUrl)
        {
            AuthenticationManager.SignOut();
            return RedirectToLocal(returnUrl);

        }

        private ActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }

            return Redirect(AppConfig.UriBase);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing && CustomUserManager != null)
            {
                CustomUserManager.Dispose();
                CustomUserManager = null;
            }
            base.Dispose(disposing);
        }

        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }

        public async Task SignInAsync(CustomApplicationUser user, bool isPersistent)
        {
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);

            var identity = await CustomUserManager.CreateIdentityAsync(user, DefaultAuthenticationTypes.ApplicationCookie);

            identity.AddClaim(new Claim("IdUsuario", user.Id ?? ""));
            identity.AddClaim(new Claim("UserName", user.UserName ?? ""));
            identity.AddClaim(new Claim("NumDocumento", user.NumDocumento ?? ""));
            identity.AddClaim(new Claim("IdGenero", user.Usuario.IdGenero.ToString() ?? ""));


            var authenticationProperties = new AuthenticationProperties();
            authenticationProperties.IsPersistent = isPersistent;
            authenticationProperties.ExpiresUtc = DateTime.UtcNow.AddMinutes(60);
            authenticationProperties.AllowRefresh = true;

            AuthenticationManager.SignIn(authenticationProperties, identity);

        }

    }
}