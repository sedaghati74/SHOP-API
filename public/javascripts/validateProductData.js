const validateProductData = function validateData() {
    this.name = null;
    this.price = 0;
    this.category_id = 0;
    this.subset_id = 0;
    this.result = {};
    this.falseValidateResult = null
}

validateProductData.prototype.ValidateName = (name,price,category_id,subset_id) => { // complete validation by price,category_id & subset_id
    this.name = name;
    this.price = price;
    this.category_id = category_id;
    this.subset_id = subset_id;
    if (this.name === null || this.name === undefined || this.name.length > 50 || this.name === "") {
        if(this.name === null || this.name === "")
        {
            this.falseValidateResult = "Name is null";
        }
        else if(this.name === undefined){
            this.falseValidateResult = "Name is undefined";
        }
        else if(this.name.length > 50){
            this.falseValidateResult = "Name's length is over than 50 characters, Change it";
        }

        return this.result = {
            status: 400,
            response: false,
            message: this.falseValidateResult,
            result: null
        }
    } else {
        return this.result = {
            status: 200,
            response: true,
            message: 'Name got successfully added',
            result: this.name.replace(" ", "_")
        }

    }
}


// validateProductData.prototype.validatePrice = price =>{
//     this.price = price;
//     if(this.name === null || this.name === undefined || this.name.length > 50){
//         return false;
//     }
// }

module.exports = validateProductData;

// Working...