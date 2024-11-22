

const validateProductData = () => {
    this.name = '';
    this.price = 0;
    this.category_id = 0;
    this.subset_id = 0;
}

validateProductData.prototype.validateId = name =>{
    this.name = name;
    if(this.name === null || this.name === undefined || this.name.length > 50){
        return false;
    }
}

// Working...