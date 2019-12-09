export class commonvars {
    url: any = "http://localhost/mfc2/";
    loginURL = "users/login";
    verifyOTPURL: any = "users/verifyotp";
    profileInfoURL: any = "users/updateprofileinfo";
    getCategoryURL: any = "users/gettopcategory";

    commonURL = "localhost/API/users/690656093798.jpg";

    Cat_Name: any;
    Cat_Id: any;
    Cat_Otp: any;

    addressURL = "http://www.json-generator.com/api/json/get/cprXjBfAuq?indent=2";
    imageBASE64 = "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";
    imagePath = "";
    setItem(key, data): any {
        return localStorage.setItem(key, data);
    }

    getItem(key): any {
        return localStorage.getItem(key);
    }
    getToken(): any {
        var auth = {
            "token": localStorage.getItem('ula-auth'),
            "user": localStorage.getItem('ula-user')
        };
        return auth;
    }
}