delimiter $$
create procedure update_loop()
begin
	declare limit_table int default 0;
    declare loop_stop int default 0;
    declare id_sv int default 0;
    declare name_sv varchar(40) default 'no name';
    select count(*) into limit_table from sinhvien;
    
    while(loop_stop>limit_table) do 
		set loop_stop = loop_stop+1;
		select id into id_sv,name into name_sv,age,class,gender from sinhvien where name like '%Nam' and id = loop_stop;
		if(name_sv != 'no name') then
			update sinhvien set name like '%Trung' where id = id_sv;
		end if;
    end while;
end$$