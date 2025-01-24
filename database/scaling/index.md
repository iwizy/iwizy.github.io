---
sidebar_position: 6
slug: /scaling
---

# Масштабирование БД

Масштабирование базы данных (БД) позволяет улучшить ее производительность и обработку большого объема данных. Одними из ключевых методов являются **партицирование** и **шардирование**. Они оба разделяют данные на части, но применяются для разных целей и имеют свои особенности.


## Партицирование

**Партицирование** — это метод логического разделения данных в одной таблице или базе на более мелкие сегменты, называемые партициями. Все партиции остаются в пределах одной базы данных или одного сервера, но доступ к данным становится более эффективным.

### Типы партицирования

1. **Диапазонное (Range Partitioning)**  
   Данные делятся на партиции на основе диапазонов значений в одном или нескольких столбцах.  

   **Пример:**  
   Таблица заказов может быть разделена на партиции по годам:  
   - Партиция 1: заказы до 2023 года.  
   - Партиция 2: заказы за 2023 год.  
   - Партиция 3: заказы с 2024 года.  

   ```sql
   CREATE TABLE orders (
       id INT,
       order_date DATE,
       amount DECIMAL
   ) PARTITION BY RANGE (YEAR(order_date)) (
       PARTITION p1 VALUES LESS THAN (2023),
       PARTITION p2 VALUES LESS THAN (2024),
       PARTITION p3 VALUES LESS THAN MAXVALUE
   );
   ```

2. **Хэш-партицирование (Hash Partitioning)**  
   Данные распределяются между партициями на основе хэш-функции.  

   **Пример:**  
   Таблица пользователей разбита на партиции по ID.  

   ```sql
   CREATE TABLE users (
       id INT,
       name VARCHAR(100)
   ) PARTITION BY HASH(id) PARTITIONS 4;
   ```

3. **Список (List Partitioning)**  
   Данные делятся на партиции по спискам значений.  

   **Пример:**  
   Таблица заказов разделена по регионам.  

   ```sql
   CREATE TABLE orders (
       id INT,
       region VARCHAR(50),
       amount DECIMAL
   ) PARTITION BY LIST (region) (
       PARTITION asia VALUES IN ('China', 'India', 'Japan'),
       PARTITION europe VALUES IN ('Germany', 'France', 'UK'),
       PARTITION americas VALUES IN ('USA', 'Canada', 'Brazil')
   );
   ```

4. **Комбинированное (Composite Partitioning)**  
   Сочетание нескольких методов (например, диапазон + хэш).  

### Преимущества партицирования

- Улучшение производительности запросов (особенно на больших таблицах).
- Простота управления данными (например, удаление старых данных с помощью удаления партиции).
- Снижение конкуренции между запросами.

### Недостатки

- Применяется в пределах одного сервера (не помогает при высокой нагрузке на сервер).
- Необходима настройка логики для выбора партиций.

## Шардирование

**Шардирование** — это метод горизонтального разделения данных, при котором данные распределяются между несколькими серверами (нодами). Каждый сервер (шард) содержит уникальную подмножество данных. 

### Отличие от партицирования

В шардировании данные разделяются не только логически, но и физически на разные серверы, в то время как в партицировании все партиции остаются на одном сервере.

### Типы шардирования

1. **Шардирование по ключу (Key-based Sharding)**  
   Данные распределяются на основе хэш-функции от значения ключа.  

   **Пример:**  
   Таблица пользователей разбита на сервера в зависимости от ID:  
   - Пользователи с ID, где `ID % 3 = 0`, находятся на сервере 1.  
   - Пользователи с `ID % 3 = 1` — на сервере 2.  
   - Пользователи с `ID % 3 = 2` — на сервере 3.  

2. **Географическое шардирование (Geographic Sharding)**  
   Данные распределяются по регионам.  

   **Пример:**  
   - Пользователи из Европы хранятся на сервере в Германии.  
   - Пользователи из Азии — на сервере в Сингапуре.  

3. **Шардирование по диапазону (Range-based Sharding)**  
   Данные разделяются по диапазонам значений, как в партицировании.  

   **Пример:**  
   Таблица заказов делится на шард-серверы по годам:  
   - Сервер 1: заказы до 2020 года.  
   - Сервер 2: заказы за 2021–2023 годы.  
   - Сервер 3: заказы с 2024 года.

### Преимущества шардирования

- Повышение масштабируемости (можно добавлять новые сервера).
- Снижение нагрузки на отдельные серверы.
- Возможность хранения больших объемов данных.

### Недостатки

- Усложнение архитектуры.
- Возможные проблемы с согласованностью данных (например, в распределенных транзакциях).
- Затраты на маршрутизацию запросов к нужному серверу.

## Сравнение партицирования и шардирования

| Характеристика       | Партицирование                | Шардирование                 |
|----------------------|------------------------------|-----------------------------|
| **Место хранения**  | Один сервер                  | Несколько серверов          |
| **Цель**            | Оптимизация запросов         | Масштабируемость системы    |
| **Реализация**      | Простая                     | Сложная                     |
| **Применимость**    | Локальные данные            | Большие объемы данных       |
| **Тип распределения**| Логическое                  | Логическое и физическое      |

## Примеры реализации шардирования и партицирования

### Реализация партицирования (PostgreSQL)

```sql
CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    sale_date DATE,
    amount DECIMAL
) PARTITION BY RANGE (sale_date);

CREATE TABLE sales_2023 PARTITION OF sales FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');
CREATE TABLE sales_2024 PARTITION OF sales FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
```

### Реализация шардирования

- **На уровне приложения:**  
  В коде приложения используется маршрутизатор, который направляет запросы к нужному серверу в зависимости от ключа.  
- **С помощью инструментов:**  
  Базы данных, такие как MongoDB или Apache Cassandra, имеют встроенную поддержку шардирования.  

Пример маршрутизатора для шардирования:

```python
def get_shard(user_id):
    shard_number = user_id % 3
    return f"db_server_{shard_number}"

server = get_shard(12345)
print(f"Запрос будет отправлен на {server}")
```

## Заключение

Партицирование и шардирование являются важными инструментами масштабирования. **Партицирование** удобно для оптимизации локальной базы данных, а **шардирование** необходимо для создания распределенной системы. В зависимости от требований системы, часто используют комбинацию этих методов.