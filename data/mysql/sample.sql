USE  `hotel_system`;

INSERT INTO hotel VALUES(1,'tea bush ramboda','ramboda'), (2, 'sigiriya jungles','sigiriya');

INSERT INTO room VALUES(1, 1, 'double', 10000, true), (2,1,'triple',12000, true), (3,1,'double',10000,false), (4,1, 'triple', 12000, false), (5, 1, 'double',15000, false),(1, 2, 'double', 10000, true), (2,2,'triple',12000, true), (3,2,'double',10000,false), (4,2, 'triple', 12000, true), (5, 2, 'double',12000, true);


INSERT INTO booking VALUES('2020-08-01','2020-08-02',1,1), ('2020-08-01','2020-08-02',1,3), ('2020-08-01','2020-08-02',2,1), ('2020-08-01','2020-08-02',2,4);