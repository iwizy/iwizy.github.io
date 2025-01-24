---
sidebar_position: 7
slug: /sql/window
---

# Оконные функции

Оконные функции в SQL позволяют выполнять вычисления по строкам в рамках набора данных, сохраняя все строки результата. Это мощный инструмент, который используется для аналитики, ранжирования, вычисления агрегатов и сравнения значений между строками. В отличие от агрегатных функций, оконные функции возвращают результат для каждой строки, не группируя их. 

## Основные особенности оконных функций

1. **Работают "поверх" набора данных:**
   - Они вычисляют значения на основе текущего состояния строк, но не изменяют их количество.

2. **Используют ключевое слово `OVER`:**
   - Это обязательная часть синтаксиса, которая определяет, как обрабатываются строки (группы, сортировка и др.).

3. **Могут быть использованы с `PARTITION BY` и `ORDER BY`:**
   - `PARTITION BY` делит строки на группы, аналогично `GROUP BY`, но каждая строка остаётся в результате.
   - `ORDER BY` задаёт порядок обработки строк внутри каждой группы.

4. **Поддерживают широкий спектр встроенных функций:**
   - Агрегатные функции (`SUM`, `AVG`, `MIN`, `MAX`).
   - Функции для ранжирования (`ROW_NUMBER`, `RANK`, `DENSE_RANK`, `NTILE`).
   - Функции для доступа к соседним строкам (`LAG`, `LEAD`).

## Синтаксис оконных функций

```sql
<Оконная функция>() OVER (
    [PARTITION BY <столбец1>, <столбец2>, ...]
    [ORDER BY <столбец1>, <столбец2>, ...]
)
```

### Элементы

- **`<Оконная функция>()`** — функция, например, `SUM`, `ROW_NUMBER`, `RANK`.
- **`PARTITION BY`** — (необязательно) делит строки на группы.
- **`ORDER BY`** — (необязательно) задаёт порядок обработки строк внутри групп.

### Примеры оконных функций

#### `ROW_NUMBER`: Нумерация строк

Функция `ROW_NUMBER` возвращает уникальный порядковый номер каждой строки внутри группы, определённой в `PARTITION BY`.

**Пример:**

```sql
SELECT 
    department_id,
    employee_id,
    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS row_num
FROM employees;
```

- Каждому сотруднику в отделе присваивается уникальный номер в порядке убывания зарплаты.

**Результат:**

| department_id | employee_id | salary | row_num |
|---------------|-------------|--------|---------|
| 10            | 101         | 5000   | 1       |
| 10            | 102         | 4000   | 2       |
| 20            | 201         | 3000   | 1       |

#### `RANK` и `DENSE_RANK`: Ранжирование

- **`RANK`** присваивает ранги строкам и пропускает следующий ранг, если есть дубликаты.
- **`DENSE_RANK`** присваивает последовательные ранги без пропусков.

**Пример:**

```sql
SELECT 
    department_id,
    employee_id,
    salary,
    RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank,
    DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dense_rank
FROM employees;
```

**Результат:**

| department_id | employee_id | salary | rank | dense_rank |
|---------------|-------------|--------|------|-----------|
| 10            | 101         | 5000   | 1    | 1         |
| 10            | 102         | 5000   | 1    | 1         |
| 10            | 103         | 4000   | 3    | 2         |

#### Агрегатные функции (`SUM`, `AVG`, `MIN`, `MAX`)

Эти функции вычисляют агрегатное значение для группы строк, но не уменьшают их количество.

**Пример:**

```sql
SELECT 
    department_id,
    employee_id,
    salary,
    SUM(salary) OVER (PARTITION BY department_id) AS total_salary,
    AVG(salary) OVER (PARTITION BY department_id) AS avg_salary
FROM employees;
```

**Результат:**

| department_id | employee_id | salary | total_salary | avg_salary |
|---------------|-------------|--------|--------------|------------|
| 10            | 101         | 5000   | 14000        | 4666.67    |
| 10            | 102         | 4000   | 14000        | 4666.67    |
| 20            | 201         | 3000   | 7000         | 3500.00    |

#### `LAG` и `LEAD`: Доступ к соседним строкам

- **`LAG`** возвращает значение из предыдущей строки.
- **`LEAD`** возвращает значение из следующей строки.

**Пример:**

```sql
SELECT 
    employee_id,
    salary,
    LAG(salary) OVER (ORDER BY salary) AS prev_salary,
    LEAD(salary) OVER (ORDER BY salary) AS next_salary
FROM employees;
```

**Результат:**

| employee_id | salary | prev_salary | next_salary |
|-------------|--------|-------------|-------------|
| 101         | 3000   | NULL        | 4000        |
| 102         | 4000   | 3000        | 5000        |
| 103         | 5000   | 4000        | NULL        |

#### `NTILE`: Разбиение на группы

Функция `NTILE` делит строки на указанное количество равных групп.

**Пример:**

```sql
SELECT 
    employee_id,
    salary,
    NTILE(3) OVER (ORDER BY salary DESC) AS group_num
FROM employees;
```

**Результат:**

| employee_id | salary | group_num |
|-------------|--------|-----------|
| 101         | 5000   | 1         |
| 102         | 4000   | 2         |
| 103         | 3000   | 3         |

### Когда использовать оконные функции

1. **Анализ данных и отчёты:**
   - Нумерация строк (например, `ROW_NUMBER`).
   - Ранжирование сотрудников по зарплатам (`RANK`, `DENSE_RANK`).

2. **Сравнение данных между строками:**
   - Анализ разницы между значениями (`LAG`, `LEAD`).

3. **Сочетание агрегатов и детализации:**
   - Одновременный расчёт суммарных значений по группам (`SUM`, `AVG`) и отображение детальных данных.

Оконные функции делают SQL удобным для сложной аналитики. Они объединяют мощь агрегатов, детализацию данных и возможности анализа временных рядов или последовательностей.