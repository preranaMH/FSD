create table movies(mov_id int(2) primary key, title varchar(20),rel_year int(4), dir_id int(3));
Insert into movies values (1,"tammudu",2000,1);
Insert into movies values (2,"simha",2012,2);
Insert into movies values (3,"yamadonga",2009,3);
Insert into movies values (4,"bahubali",2000,3);
Insert into movies values (6,"bahu",2000,6);
Insert into movies values (5,"ps2",2023,4);
select * from movies;
create table directors(dir_name varchar(20),dir_id int(2) primary key);
Insert into directors values("VV Vinayak",1); 
Insert into directors values("boyapati",2);
Insert into directors values("rajamouli",3);
Insert into directors values("maniratnam",4);
select * from directors;
create table genres(genre_id int(2) primary key,genre_name varchar(20)) ;
Insert into genres values(1,"historical");
Insert into genres values(2,"horror");
Insert into genres values(3,"romantic");
Insert into genres values(4,"fictional");
select * from genres;
create table movie_genre(mov_id int(2), genre_id int(2));
insert into movie_genre values(1,2);
insert into movie_genre values(2,4);
insert into movie_genre values(3,3);
insert into movie_genre values(4,3);
insert into movie_genre values(5,1);
select * from movie_genre;

/* queries*/
select movies.title,directors.dir_name from movies join directors on movies.dir_id=directors.dir_id;

select movies.title,movies.rel_year,directors.dir_name from movies  join directors on movies.dir_id=directors.dir_id;

select directors.dir_name, movies.title from movies left join directors on movies.dir_id=directors.dir_id;

select movies.title,movies.rel_year,directors.dir_name from movies right join directors on movies.dir_id=directors.dir_id;

select movies.title, genres.genre_name from movies, genres,movie_genre where movies.mov_id=movie_genre.mov_id and movie_genre.genre_id=genres.genre_id;


