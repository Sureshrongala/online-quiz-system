# online-quiz-system
```md
# Online Quiz System

### Prerequisites:
- Java 17+
- MySQL Database
- Maven

### Setup Instructions:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/online-quiz-system.git
   ```
2. Navigate to the project folder:
   ```bash
   cd online-quiz-system
   ```
3. Configure `application.properties`:
   ```properties
   spring.datasource.url=jdbc:oracle:thin:@localhost:1521:XE
   spring.datasource.username=System
   spring.datasource.password=tiger
   spring.jpa.hibernate.ddl-auto=update
   ```
4. Run the project:
   ```bash
   mvn spring-boot:run
   ```
