function UserService(){
    this.getListUserApi = function(){
        return axios({
            url: "https://60bc9ad6b8ab37001759f4e1.mockapi.io/api/users",
            method: "GET"
        });
    };
}