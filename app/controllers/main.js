var services = new UserService();

function getData(){
    services.getListUserApi().then(function(res){
        renderUsers(res.data);
    }).catch(function(error){
        console.log(error);
    })
}

getData();

function renderUsers(list){
    var contentHTML = "";
    
    list.forEach(function(user) {
      var loaiND = `${user.loaiND}`;
    if( loaiND === `GV`){
        contentHTML += `
        <div class="col-12 col-lg-3 col-md-6">
          <div class="item">
            <div class="avt_agent">
              <img src="../../assets/image/${user.hinhAnh}" alt="">
            </div>
            <div class="info pt-4 pb-3">
              <span class=>${user.ngonNgu}</span>
              <h1>${user.hoTen}</h1>
              <p>${user.moTa}</p>
            </div>
          </div>
        </div>
        `
    }
    });
    document.getElementById("usersList").innerHTML = contentHTML;
  
}