const serverPath = "http://localhost/pro";
const localPath = "http://localhost:5000";

let path = localPath;
let imgPath = "";
let httpPath = "";

if (process.env.NODE_ENV === "development") {
    path = localPath;
    imgPath = "http://localhost/test";
    httpPath = imgPath + "/filename/";
} else {
    path = serverPath;
    imgPath = "http://yourweb";
    httpPath = imgPath + "/filename/";
}

export default path;

export { imgPath, httpPath };
