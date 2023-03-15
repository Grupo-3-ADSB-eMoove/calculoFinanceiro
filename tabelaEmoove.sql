CREATE DATABASE sprint1;
USE sprint1;

CREATE TABLE Usuario(
idCliente INT PRIMARY KEY NOT NULL auto_increment,
nome varchar (45) not null,
telefone VARCHAR(20),
senha varchar (45) not null,
situacaoCliente varchar(20) not null
);

CREATE TABLE Estabelecimento(
idCNPJ char (14) not null PRIMARY KEY,
nomeFantasia varchar (40) not null,
endereco varchar (40) not null,
cep char (8)
);

CREATE TABLE Compra(
idCompra INT PRIMARY KEY NOT NULL auto_increment,
dataCompra DATE,
valorCompra DECIMAL
);

CREATE TABLE sensorEntrada(
idEntrada INT PRIMARY KEY NOT NULL auto_increment,
qtdEntrada INT not null
);

CREATE TABLE sensorCaixa(
idCaixa INT PRIMARY KEY NOT NULL auto_increment,
qtdCaixa INT not null
);

INSERT INTO Usuario VALUES 
(null, 'Matheus Lima', '11943098276' ,'#GF123456789', 'pago');

INSERT INTO Estabelecimento VALUES 
('06818595000173', 'Farmácia XPTO', 'Avenida Paulista', '01311000');

INSERT INTO Compra VALUES 
(null, '2023-02-03', '1000.00');

INSERT INTO sensorEntrada VALUES
(null, '5');

INSERT INTO sensorCaixa VALUES
(null, '5');


SELECT * FROM Usuario;
SELECT * FROM Estabelecimento;
SELECT * FROM Compra;
SELECT * FROM sensorEntrada;
SELECT * FROM sensorCaixa;


