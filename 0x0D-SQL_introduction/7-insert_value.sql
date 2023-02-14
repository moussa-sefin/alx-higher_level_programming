-- script that inserts a new row in the table first_table (database hbtn_0c_0) in your MySQL server.
read -s -p "Enter password: " MYSQL_PASSWORD

echo "INSERT INTO first_table (id, name) VALUES (89, 'Best School');" | mysql -h localhost -u root -p$MYSQL_PASSWORD hbtn_0c_0


