let UIModule = (function() {

    let UISelectors = {
        searchBox : "#search-box",
        error : "#error",
        print : ".print",
        container : "#gallery"
    }
    
    let searchBox = $(UISelectors.searchBox)[0];
    let error = $(UISelectors.error)[0];
    
    let getFormData = () => searchBox.value;

    let validation = (input) => {
        if (!input) {
            setError();
            return false;
        }
        clearError();
        return true;
    }

    let setError = () => {
        $(error).show();
    }
    
    let clearError = () => {
        $(error).hide();
    }

    let printUsers = (data) => {
        let userObj = JSON.parse(data);
        for (let i=0; i < 6 && i < userObj.items.length; i++){
            let item = $('<div class="item">').html(`<img src="${userObj.items[i].avatar_url}"><p>${userObj.items[i].login}</p>`);
            $(UISelectors.container).append(item);
        }
    }

    let removePrevious = () => {
        $(UISelectors.container).html('');
    }

    return {
        getFormData : getFormData,
        UISelectors : UISelectors,
        validation : validation,
        status : status,
        setError : setError,
        clearError : clearError,
        printUsers : printUsers,
        removePrevious : removePrevious
    }
})();