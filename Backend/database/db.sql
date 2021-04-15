CREATE DATABASE backend_www;

USE backend_www;

/* TABLA DE CLIENTES */
CREATE TABLE clientes (
    id_persona INT(10) NOT NULL AUTO_INCREMENT ,
    cedula INT(12) NOT NULL ,
    nombres VARCHAR(50) NOT NULL ,
    apellidos VARCHAR(50) NOT NULL ,
    correo VARCHAR(100) NOT NULL ,
    telefono VARCHAR(10) NOT NULL , 
    fecha_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    fecha_actualizado DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
    activo BOOLEAN NOT NULL,
    UNIQUE indice (id_persona) ,
    PRIMARY KEY(cedula)    
) ENGINE=InnoDB DEFAULT CHARACTER SET=utf8; /* Prueba no lo he ensayado*/

DESCRIBE clientes;

/* PARA MODIFICAR LAS TABLAS DESPUES DE HABERSE CREADO */
/*
ALTER TABLE clientes
    ADD PRIMARY KEY(cedula)

ALTER TABLE clientes
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;    
*/

/* TABLA DE USUARIOS */
CREATE TABLE usuarios (
    id_usuario INT(10) NOT NULL AUTO_INCREMENT ,
    cedula_id INT(12) NOT NULL ,
    nombre_usuario VARCHAR(50) NOT NULL ,
    contrasenia VARCHAR(100) NOT NULL , 
    UNIQUE indice (id_usuario) ,
    PRIMARY KEY(nombre_usuario) ,     
    CONSTRAINT fk_cedula FOREIGN KEY (cedula_id) REFERENCES clientes(cedula)
);


/* TABLA DE VEHICULOS */
CREATE TABLE vehiculos (
    id_vehiculo INT(10) NOT NULL AUTO_INCREMENT ,
    placa VARCHAR(50) NOT NULL ,
    cedula_propietario INT(12) NOT NULL ,
    modelo VARCHAR(50) NOT NULL ,
    marca VARCHAR(50) NOT NULL ,
    procedencia VARCHAR(20) NOT NULL ,    
    stock BOOLEAN NOT NULL,
    img VARCHAR(500) NOT NULL,
    fecha_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    fecha_actualizado DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
    fecha_para_venta TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    UNIQUE indice (id_vehiculo) ,
    PRIMARY KEY(placa) ,
    CONSTRAINT fk_ced_propietario FOREIGN KEY (cedula_propietario) REFERENCES clientes(cedula)
);


/* TABLE DE COMPRA */
CREATE TABLE compras (
    id_compra INT(10) NOT NULL AUTO_INCREMENT ,
    serial_compra VARCHAR(50) NOT NULL ,
    cedula_cliente INT(12) NOT NULL ,
    placa_vh_compra VARCHAR(50) NOT NULL,
    valor_compra DOUBLE(15,2) NOT NULL,
    fecha_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,    
    UNIQUE indice (id_compra) , 
    UNIQUE indice_1 (placa_vh_compra) , 
    PRIMARY KEY(serial_compra) ,    
    CONSTRAINT fk_placa_compra FOREIGN KEY (placa_vh_compra) REFERENCES vehiculos(placa) ,
    CONSTRAINT fk_ced_cliente FOREIGN KEY (cedula_cliente) REFERENCES clientes(cedula)
);

/* TABLA DE VENTA */
CREATE TABLE ventas (
    id_venta INT(10) NOT NULL AUTO_INCREMENT ,
    serial_venta VARCHAR(50) NOT NULL ,
    propietario_nuevo INT(12) NOT NULL ,
    placa_vh_venta VARCHAR(50) NOT NULL ,
    valor_venta DOUBLE(15,2) NOT NULL ,
    fecha_venta_efectiva TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    UNIQUE indice (id_venta) ,
    UNIQUE indice_1 (placa_vh_venta) ,
    PRIMARY KEY(serial_venta) ,
    CONSTRAINT fk_propietario_nuevo FOREIGN KEY (propietario_nuevo) REFERENCES clientes(cedula) ,
    CONSTRAINT fk_placa_venta FOREIGN KEY (placa_vh_venta) REFERENCES vehiculos(placa)
);