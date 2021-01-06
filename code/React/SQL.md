`\l` means show dir <br><br>
`\c database_name` can connect to database <br><br>
`\dt` find relations

    select version();
    select now(); ->show time

1. 整体框架：
    DQL(数据查询语句):
    select

DML(数据操作语言)
    insert, update, delete

DDL(数据定义语言):        <br>
    create, alter, drop      <br>
    create table t_student(id int auto_increment primary key)   <br>
    alter table t_student add sex int(1) not null DEFAULT 0;    <br>
    drop table t_student    <br>
    insert into t_student (id, name) values  (3, 'ZQ'), (4, 'WG');  <br>

DCL(数据控制语言):
    grant, revoke

    TCL():

2. 基本帮助语法
    help + command <br>
    help create database

3. DQL! important
    Select:
    select * from emp;
    select empno, job, name from emp;
    select name, sal * 12 as Salary from emp;
    select distinct salary from emp; --> 去掉重复的

    select name, salary from emp order by salary desc; --> 降序
    select name, salary from emp order by salary asc; --> 升序
    select name, salary from emp where sal > 1000 and sal < 2000; --> 大于1000

    select * from emp limit 0, 5; 从0开始取， 取5行

4. Aggregate Function 聚合函数(不能在group by 里面使用)
    select count(empno) from emp = select count(1) from emp

    select * from emp where salary > 200

    select avg(salary) from emp -> 聚合函数ave()平均值
    sum(salary)
5. 内置函数
    select concat(ename, "'s salary is ", salary) from emp
    select length('abc')
    select substring('abcdefghigh', 1, 3) ->从1开始长度是3 --> abc

    去掉首尾空格：trim(str)
        select rtrim(ename) from emp --> 去掉右边的空格
    数学函数：
        abs(n)

    日期函数：
        %y, %Y: 返回2位、 4位整数
        %h, %H: 返回1-12、 0-23，整数
        %i, %s: 返回0-59， 整数

    DML：
        日期： data_format('20200107', '%Y%m%d')
        insert into emp (empno, name, hiredate) values(9999, 'JIaw','2020-01-07');
        select DATE_FORMAT(CURRENT_DATE(), '%Y-%m-%d')

6. 分组
    按部门分组， 求平均工资：select department, avg(salary) from emp group by department

    每个部门的人数，最高工资，最低工资， 平均工资
    select count(1), max(sal), min(sal), avg(sal) from emp group by department

    每个部门的人数，最高工资，最低工资， 平均工资, 除去10部门
    select count(1), max(sal), min(sal), avg(sal) from emp where department <> 10 group by department

7. SQL 语句执行顺序：
    from > where > group by > having > select > order by

8. having 过滤
    每个部门的人数，最高工资，最低工资，平均工资, 除了avg < 200
    select count(1), max(sal), min(sal), avg(sal) from emp group by department having avg(sal) > 2000

    1. select count(1), max(sal) from emp group by years(hiredate)
    2. select count(1), min(sal)  from emp group by job having min(sal) < 2000
    3. select depart, avg(sal), count(1) from emp group by depart having count(1) < 4
    4. select depart, max(sal) from emp group by department having  max(sal) >= 3000

9. 性质：
    primary key : unique, not null, also can be combined by several characters
insert into emps

10. 约束建立表格
    create table t_dept(
        id int(8) PRIMARY KEY,
        name VARCHAR(200) not null,
        emp_max_count int(2) CHECK(emp_max_count > 0 and emp_max_count < 20),
        parent_id int(8)，
        FOREIGN KEY parent_id REFERENCE t_dept(id),  -->约束id，所有值都要在parent_id里面
    )
    
select `SUBSCRIBER_ID`, ``, ``, `` from SUBSCRIBER
left join `SUBSCIBER` using (`SUBSCRIBER_ID`)
