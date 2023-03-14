CREATE DATABASE projeto;
USE projeto;

CREATE TABLE tbUsuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(50) not null,
email varchar(80),
senha varchar(30)
);

CREATE TABLE telefoneUsuario(
idTelefoneUsuario int primary key auto_increment,
telefoneUser varchar (12),
idUsuario int
-- primary key (idUsuario),
-- foreign key (idUsuario) references tbUsuario (idUsuario)
);


CREATE TABLE tbSensor (
idSensor int primary key auto_increment ,
tipoSensor varchar (20),
contagem int
);

CREATE TABLE entradaSensor(

idEntrada int primary key auto_increment,
idSensor int,
contagemEntrada  int,
dtHora datetime
-- primary key (idSensor),
-- foreign key (idSensor) references tbSensor (idSensor)
);

CREATE TABLE compraCliente (
idCompraCliente int primary key auto_increment,
idUsuario int ,
idSensor int ,
dataCompra date,
qtdSensor int,
valor_compra decimal
-- primary key (idSensor),
-- foreign key (idSensor) references tbSensor (idSensor),
-- primary key (idCompra),
-- foreign key (idUsuario) references tbUsuario (idUsuario)
);

CREATE TABLE estabelecimentoUser (
idEstabelecimento int primary key auto_increment,
idCompraCliente int,
enderecoEstabelecimento varchar(100),
cepEstabelecimento varchar(8),
numeroEstabelecimento tinyint
-- primary key (idCompraCliente),
-- foreign key (idCompraCliente) references tbCompraCliente (idCompraCliente)
);

