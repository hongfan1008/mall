CREATE TABLE IF NOT EXISTS `user` (
    `id`                   int NOT NULL AUTO_INCREMENT COMMENT '用户id' ,
    `username`             varchar(64) NOT NULL COMMENT '用户名',
    `password`             varchar(256) DEFAULT NULL COMMENT '用户密码，MD5加密',
    `phone`                varchar(50)  DEFAULT NULL ,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4
    COLLATE = utf8mb4_bin;


CREATE TABLE IF NOT EXISTS `category` (
    `id`                   int  NOT NULL AUTO_INCREMENT COMMENT '类别id' ,
    `name`             varchar(64) NOT NULL COMMENT '类别名称',
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4
    COLLATE = utf8mb4_bin;

CREATE TABLE IF NOT EXISTS `product` (
    `id`                   int  NOT NULL AUTO_INCREMENT COMMENT '商品id' ,
    `category_id`          int  NOT NULL COMMENT '类别id',
    `name`                 varchar(100) NOT NULL COMMENT '商品名称',
    `image`                varchar(500) NOT NULL COMMENT '商品图片地址',
    `url`                  varchar(500) NOT NULL COMMENT '跳转的地址',

    `price`                float NOT NULL COMMENT '商品的价格',
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4
    COLLATE = utf8mb4_bin;


CREATE TABLE IF NOT EXISTS `cart` (
    `id`                   int  NOT NULL AUTO_INCREMENT COMMENT 'id' ,
    `user_id`              int(11) NOT NULL COMMENT  '用户id',
    `product_id`           int  NOT NULL COMMENT '商品id',
    `product_image`        varchar (200) NOT NULL COMMENT '商品的图片',
    `product_name`         varchar (200) NOT NULL COMMENT '商品的名字',
    `product_quantity`     int NOT NULL COMMENT '商品数量',
    `product_price`        float NOT NULL COMMENT '商品的价格',
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4
    COLLATE = utf8mb4_bin;


CREATE TABLE IF NOT EXISTS `pay_info` (
    `id`                   int  NOT NULL AUTO_INCREMENT COMMENT '订单id' ,
     `user_id`              int  NOT NULL  COMMENT '用户id',
    `order_number`         varchar (100) NOT NULL COMMENT '订单号',
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4
    COLLATE = utf8mb4_bin;

