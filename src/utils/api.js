let sinatraApiBaseUrl = "";

if (process.env.NODE_ENV !== "production"){
    sinatraApiBaseUrl = "http://localhost:9292";
}
else {
    sinatraApiBaseUrl = process.env.REACT_APP_SINATRA_API_BASE_URL;
}

export { sinatraApiBaseUrl };