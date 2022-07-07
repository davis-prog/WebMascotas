using Newtonsoft.Json;
using RegistroDeMascotas.BE;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace RegistroDeMascotas.web.Core
{
    public class Authorization
    {
        public async Task<UsuarioBE> Authorize(object userCredential)
        {
            try
            {
                var content = new StringContent(JsonConvert.SerializeObject(userCredential), UTF8Encoding.UTF8, "application/json");
                var client = new HttpClient();
                var context = Constantes.WebApiContext;
                var endpoint = Constantes.EndpointAccount;
                var path = string.Format("{0}{1}", context, endpoint);
                System.Net.ServicePointManager.ServerCertificateValidationCallback +=
                (se, cert, chain, sslerror) => { return true; };

                var response = await client.PostAsync(path, content);

                if (!response.IsSuccessStatusCode)
                {
                    var contentError = await response.Content.ReadAsStringAsync();
                    var responseError = JsonConvert.DeserializeObject<UsuarioBE>(contentError);

                    return responseError;
                }
                var contentOk = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeObject<UsuarioBE>(contentOk);

                return result;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}