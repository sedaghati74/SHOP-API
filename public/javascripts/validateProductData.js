const validateProductData = () => {
    this.name = '';
    this.price = 0;
    this.category_id = 0;
    this.subset_id = 0;
}

validateProductData.prototype.validateName = name => { // do not tested
    this.name = name;
    if (this.name === null || this.name === undefined || this.name.length > 50) {
        return false;
    } else {
        this.name.prototype.replace(" ", "_")
        return this.name.prototype.toString();
    }
}

// validateProductData.prototype.validatePrice = price =>{
//     this.price = price;
//     if(this.name === null || this.name === undefined || this.name.length > 50){
//         return false;
//     }
// }

// Working...