# My-Portfy
Online platform for you to create your portfolio.

> Status: Developing ⚠️

## Technologies
Here are the technologies used in this project:
- Java 11
- SpringBoot
- ReactJS
- PostgreSQL
- H2 Database

## Run


### Configure email service

- In [application.properties](https://github.com/dev-Pedrod/My-Portfy/blob/master/myportfy-backend/src/main/resources/application.properties) put your email in `spring.mail.username` and your token in `spring.mail.password` to use the email service.

Example:
  ```
spring.mail.username=YourGmailHere@gmail.com
spring.mail.password=YourTokenHere
  ```
*Guide to generate 16 digits token to configure Gmail smtp:  [Sign in with app passwords](https://support.google.com/accounts/answer/185833)*

### Database
#### test profile:
- Access the H2 database at: [H2 Database](http://localhost:8080/h2-console/)

*(Remember to run the back-end before accessing)*

#### dev profile:
- In PostgreSQL, create Database named myportfy or other name you want
- add your database variables in [application-dev.properties](https://github.com/dev-Pedrod/My-Portfy/blob/master/myportfy-backend/src/main/resources/application-dev.properties)

*(Remember to install dependencies before running the project)*

## Images

### PC
 ![ezgif-5-3deeb7a464](https://user-images.githubusercontent.com/86006066/168493066-f34d6b5f-c01d-4646-af21-2f6a1a4520a9.gif)

### Mobile
<p align="center">
 <img alt="Mobile-gif" src="https://user-images.githubusercontent.com/86006066/168493070-7d39ca0f-8413-4bfe-b78f-4b4537d37fee.gif">
</p>

---
By dev-Pedrod  [*See my Linkedin*](https://www.linkedin.com/in/pedrooliveiradev/)
