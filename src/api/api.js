import axios from "axios";

const responseHandler = (response) => {
  if (!response || !response.status) return { status: 500, message: "Error desconocido en la consulta" };
  const status = response.status;
  const data = response.data ? response.data : null;
  switch (status) {
    case 200:
      return { status, data: response.data }
    case 400:
      return { status, data: data ? data : "Datos incorrectos en la consulta" };
    case 401:
      return { status, data: data ? data : "Debe autenticarse para realizar esta consulta" };
    case 403:
      return { status, data: data ? data : "No posee los permisos para realizar esta consulta" };
    case 404:
      return { status, data: data ? data : "No se encontro resultados para esta consulta" };

    default:
      return { status, data: data ? data : "Error desconocido en la consulta" };
  }
}


export const request = async (url, options) => {
  const requestInfo = {
    method: options.method,
    url
  }

  if (options.data) requestInfo["data"] = options.data;

  if(options.credentials) requestInfo["Authorization"] = options.credentials;
  
  if(options.headers) requestInfo["headers"] = options.headers;
  
  try {
    const axiosResponse = await axios(requestInfo);
    return responseHandler(axiosResponse);
  } catch (error) {
    return responseHandler(error.response);
  }
  
}