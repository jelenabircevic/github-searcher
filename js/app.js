let mainModule = (function (UIModule) {
    let data;
    window.addEventListener('keydown', function (event) {
        if (event.keyCode == 13) {
            let query = UIModule.getFormData();
            if (UIModule.validation(query)) {
                let request = $.get(`https://api.github.com/search/users?q=${query}`);
                request.done(function () {
                    data = request.responseText;
                    UIModule.removePrevious();
                    UIModule.printUsers(data);
                })
            }
        }
        return
    })
})(UIModule);
