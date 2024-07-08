package main

import (
    "time"
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
)

type User struct {
    gorm.Model
    LastName      string
    UserType      bool
    RegisterDate  time.Time
    UserName      string
    Password      string 
}

type Course struct {
    gorm.Model
    Name          string
    Description   string
    Duration      string
    Difficulty    string
    RegisterDate  time.Time
    Rating        string
    Category      string
    Archive1      string 
    Archive2      string 
}

type Comment struct {
    gorm.Model
    UserID         uint
    CourseID       uint
    Description    string
    RealizationDate time.Time
}

type UserCourse struct {
    UserID    uint `gorm:"primaryKey"`
    CourseID  uint `gorm:"primaryKey"`
}

func main() {
    // Conectar a la base de datos MySQL
    dsn := "user:admin@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
        panic("failed to connect database")
    }

    // Migrar los esquemas
    db.AutoMigrate(&User{}, &Course{}, &Comment{}, &UserCourse{})
}
