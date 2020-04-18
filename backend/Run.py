import datetime
import peewee as pw

db = pw.SqliteDatabase('Manager.db')


class Manager(pw.Model):
    email = pw.CharField(unique=True)
    fname = pw.CharField()
    lname = pw.CharField()
    password = pw.CharField(null=True)
    address = pw.TextField()
    dob = pw.DateField()
    company = pw.CharField()

    def __str__(self):
        return "Email: {0}, Fname: {1}, Lname: {2}, Address: {3}, DOB: {4}, Company: {5}" \
            .format(self.email, self.fname, self.lname, self.address, self.dob, self.company)

    class Meta:
        database = db


class Emp(pw.Model):
    empidEmp = pw.CharField(unique=True)
    fnameEmp = pw.CharField()
    lnameEmp = pw.CharField()
    addressEmp = pw.TextField()
    dobEmp = pw.DateField()
    cityEmp = pw.CharField()
    mobEmp = pw.IntegerField()

    def __str__(self):
        return "EmpID: {0}, Fname: {1}, Lname: {2}, Address: {3}, DOB: {4}, City: {5}, MOB: {6}" \
            .format(self.empidEmp, self.fnameEmp, self.lnameEmp, self.addressEmp, self.dobEmp, self.cityEmp,
                    self.mobEmp)

    class Meta:
        database = db


db.connect()
db.create_tables([Manager, Emp])
