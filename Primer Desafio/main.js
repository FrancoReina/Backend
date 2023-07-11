class ProductManager {
    constructor() {
      this.products = [];
      this.Id = 1;
    }

    addProduct(product) {
      if (!this.productocheck(product)) {
        console.log("Error: verificar producto");
        return;
      }
  
      if (this.codigoduplicado(product.codigo)) {
        console.log("Error: El codigo del producto ya existe");
        return;
      }
  
      const newProduct = {
        id: this.Id,
        Titulo: product.title,
        descripcion: product.description,
        precio: product.precio,
        img: product.img,
        codigo: product.codigo,
        stock: product.stock
      };
  
      this.products.push(newProduct);
      this.Id++;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((producto) => producto.id === id);
      if (product) {
        return product;
      } else {
        console.log("Error: No existe el producto");
      }
    }
  
    productocheck(product) {
      return (
        product.title &&
        product.description &&
        product.precio &&
        product.img &&
        product.codigo &&
        product.stock
      );
    }
  
    codigoduplicado(codigo) {
      return this.products.some((producto) => producto.codigo === codigo);
    }
  }
  

const manager = new ProductManager();

const Cocacola = {
  title: "CocaCola",
  description: "Bebida Cocacola 2,25 lt",
  precio: 500,
  img: "descargas/coca.jpg",
  codigo: "1000",
  stock: 100
};

manager.addProduct(Cocacola);

const Pepsi = {
  title: "Pepsi",
  description: "Bebida Pepsi 2,25 lt",
  precio: 450,
  img: "descargas/Pepsi.jpg",
  codigo: "1001",
  stock: 100
};

manager.addProduct(Pepsi);

const products = manager.getProducts();
console.log(products);

const MostrarProducto = manager.getProductById(2);
console.log(MostrarProducto);

const ProductoNoEncontrado = manager.getProductById(3);
