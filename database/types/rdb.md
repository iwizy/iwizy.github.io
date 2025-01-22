---
sidebar_position: 1
slug: /database/types/rdb
---

# Реляционные базы данных

Реляционная база данных (РБД) — это система для хранения, управления и обработки данных, организованных в виде таблиц, где строки (записи) представляют данные, а столбцы (поля) описывают их свойства. Реляционные базы данных основываются на реляционной модели, предложенной Эдгаром Коддом в 1970 году.

## Основные особенности реляционных баз данных

1. **Табличная структура данных**:
   - Данные организуются в таблицы (или отношения).
   - Каждая таблица имеет столбцы (атрибуты), которые определяют тип данных, и строки (кортежи), которые содержат сами данные.

2. **Уникальность строк (ключи)**:
   - Каждая строка в таблице идентифицируется уникальным ключом, обычно это первичный ключ (Primary Key).
   - Например, в таблице с данными о клиентах столбец `id` может быть первичным ключом.

3. **Связи между таблицами**:
   - Таблицы в РБД связаны между собой через внешние ключи (Foreign Keys).
   - Это позволяет избегать дублирования данных и организовывать их более эффективно.
   - Пример: таблица "Заказы" может содержать внешний ключ `customer_id`, который ссылается на таблицу "Клиенты".

4. **Нормализация данных**:
   - Нормализация — это процесс разделения данных на таблицы для минимизации избыточности и обеспечения целостности.
   - Пример: вместо хранения имени клиента в таблице "Заказы", оно хранится в таблице "Клиенты", а "Заказы" содержит ссылку на клиента.

5. **Язык запросов SQL**:
   - Для взаимодействия с реляционными базами данных используется язык структурированных запросов [SQL (Structured Query Language)](/database/sql/index.md).
   - SQL позволяет выполнять операции: выборка данных (`SELECT`), добавление (`INSERT`), обновление (`UPDATE`), удаление (`DELETE`).

6. **Целостность данных**:
   - РБД обеспечивает целостность данных с помощью ограничений, таких как:
     - Первичный ключ (Primary Key).
     - Внешний ключ (Foreign Key).
     - Ограничения на значения (например, `NOT NULL`, `UNIQUE`).

7. **Транзакции**:
   - Поддержка транзакций обеспечивает согласованность данных.
   - Транзакция имеет четыре свойства (ACID):
     - **Atomicity (атомарность)**: все операции транзакции выполняются полностью или не выполняются вовсе.
     - **Consistency (согласованность)**: данные остаются в согласованном состоянии после завершения транзакции.
     - **Isolation (изоляция)**: параллельные транзакции не влияют друг на друга.
     - **Durability (долговечность)**: изменения, внесённые успешной транзакцией, сохраняются даже в случае сбоев системы.

## Примеры использования реляционной базы данных

### Пример 1: Интернет-магазин

1. Таблица "Клиенты":

   | id  | name      | email             |
   |-----|-----------|-------------------|
   | 1   | Иван Иванов | ivan@example.com |
   | 2   | Анна Смирнова | anna@example.com |

2. Таблица "Товары":

   | id  | name         | price  |
   |-----|--------------|--------|
   | 1   | Смартфон     | 500    |
   | 2   | Ноутбук      | 1000   |

3. Таблица "Заказы":

   | id  | customer_id | product_id | quantity |
   |-----|-------------|------------|----------|
   | 1   | 1           | 2          | 1        |
   | 2   | 2           | 1          | 2        |

   - В таблице "Заказы" столбец `customer_id` является внешним ключом, ссылающимся на таблицу "Клиенты".
   - Столбец `product_id` — внешний ключ, ссылающийся на таблицу "Товары".

#### Пример 2: Система управления студентами

1. Таблица "Студенты":

   | id  | имя         | возраст | группа  |
   |-----|-------------|---------|---------|
   | 1   | Ольга       | 20      | 101     |
   | 2   | Дмитрий     | 21      | 102     |

2. Таблица "Предметы":

   | id  | название      | преподаватель    |
   |-----|---------------|------------------|
   | 1   | Математика    | Петров           |
   | 2   | Физика        | Иванов           |

3. Таблица "Успеваемость":

   | id  | student_id | subject_id | оценка |
   |-----|------------|------------|--------|
   | 1   | 1          | 1          | 5      |
   | 2   | 2          | 2          | 4      |

   - Таблица "Успеваемость" связывает студентов с предметами через `student_id` и `subject_id`.


### Примеры систем управления реляционными базами данных (СУБД)

1. **Коммерческие**:
   - Oracle Database.
   - Microsoft SQL Server.
   - IBM Db2.

2. **Открытые**:
   - MySQL.
   - PostgreSQL.
   - SQLite.

### Преимущества реляционных баз данных

- Простота использования благодаря SQL.
- Высокая структурированность и предсказуемость данных.
- Поддержка сложных связей и операций с данными.
- Надёжность и защита целостности данных.

### Недостатки реляционных баз данных

- Производительность может снижаться при работе с огромными объёмами данных (Big Data).
- Менее гибки в сравнении с NoSQL при работе с неструктурированными данными.
- Требуют более сложного администрирования.

Реляционные базы данных остаются универсальным решением для множества приложений, требующих высокой целостности и структурированности данных.