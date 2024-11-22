const validateProductData = function validateData() {
    this.name = '';
    this.price = 0;
    this.category_id = 0;
    this.subset_id = 0;
}

validateProductData.prototype.ValidateName = (name) =>  {
    this.name = name;
    if (this.name === null || this.name === undefined || this.name.length > 50) {
        return false;
    } else {
        this.name.replace("test", "aa")
        return this.name.toString();
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