-- script that inserts a new row in the table first_table (database hbtn_0c_0) in your MySQL server.
mysql -hlocalhost -uroot -p hbtn_0c_0 <<EOF
INSERT INTO first_table (id, name)
VALUES (89, 'Best School');
EOF

