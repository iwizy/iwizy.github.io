---
sidebar_position: 2
slug: /sql/agrigate
---

# Агрегатные функции

Агрегатные функции в SQL — это специальные функции, которые выполняют операции над набором строк в таблице и возвращают одно обобщенное значение. Они широко используются для анализа данных и получения сводной информации, например, подсчета количества записей, нахождения суммы или среднего значения, а также поиска максимальных или минимальных значений.

Рассмотрим основные агрегатные функции более подробно, с примерами их применения.

## `COUNT` — Подсчет строк

Функция `COUNT` используется для подсчета количества строк в таблице или значений в конкретном столбце. Она полезна для определения размера набора данных.

### Примеры

- **Общее количество записей в таблице**:

```sql
SELECT COUNT(*) AS total_employees
FROM employees;
```

Здесь `COUNT(*)` подсчитывает все строки в таблице `employees`, включая строки с `NULL`.

- **Подсчет строк с условием**:

```sql
SELECT COUNT(*) AS sales_employees
FROM employees
WHERE department = 'Sales';
```

Этот запрос подсчитывает количество сотрудников, работающих в отделе `Sales`.

- **Подсчет значений в конкретном столбце**:

```sql
SELECT COUNT(salary) AS salary_count
FROM employees;
```

`COUNT(salary)` подсчитывает только строки, где столбец `salary` не равен `NULL`.

## `SUM` — Суммирование значений

Функция `SUM` возвращает сумму значений в указанном числовом столбце. Она часто применяется для подсчета общих затрат, доходов и других числовых данных.

### Примеры

- **Общая сумма зарплат сотрудников**:

```sql
SELECT SUM(salary) AS total_salary
FROM employees;
```

Этот запрос вычисляет общую сумму всех зарплат.

- **Сумма зарплат с фильтром**:

```sql
SELECT SUM(salary) AS total_it_salary
FROM employees
WHERE department = 'IT';
```

Этот запрос подсчитывает сумму зарплат только тех сотрудников, которые работают в отделе `IT`.

## `AVG` — Среднее значение

Функция `AVG` вычисляет среднее арифметическое для числового столбца. Она полезна для анализа данных, таких как средняя зарплата, средняя цена или производительность.

### Примеры

- **Средняя зарплата всех сотрудников**:

```sql
SELECT AVG(salary) AS average_salary
FROM employees;
```

Функция суммирует все значения столбца `salary` и делит их на количество строк.

- **Средняя зарплата в разрезе отделов**:

```sql
SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department;
```

Этот запрос группирует сотрудников по отделам и вычисляет среднюю зарплату для каждого отдела.

## `MAX` — Максимальное значение

Функция `MAX` находит наибольшее значение в указанном столбце.

### Примеры

- **Максимальная зарплата среди всех сотрудников**:

```sql
SELECT MAX(salary) AS max_salary
FROM employees;
```

- **Максимальная зарплата по каждому отделу**:

```sql
SELECT department, MAX(salary) AS max_salary
FROM employees
GROUP BY department;
```

Запрос возвращает максимальную зарплату для каждого отдела.

## `MIN` — Минимальное значение

Функция `MIN` находит наименьшее значение в столбце.

### Примеры

- **Минимальная зарплата среди всех сотрудников**:

```sql
SELECT MIN(salary) AS min_salary
FROM employees;
```

- **Минимальная зарплата по каждому отделу**:

```sql
SELECT department, MIN(salary) AS min_salary
FROM employees
GROUP BY department;
```

Этот запрос возвращает минимальную зарплату в каждом отделе.

## Использование `GROUP BY` с агрегатными функциями

Для группировки данных и применения агрегатных функций используется оператор `GROUP BY`. Он группирует строки таблицы по значениям в одном или нескольких столбцах.

### Примеры

- **Количество сотрудников по отделам**:

```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;
```

- **Общая зарплата и максимальная зарплата по отделам**:

```sql
SELECT department, SUM(salary) AS total_salary, MAX(salary) AS max_salary
FROM employees
GROUP BY department;
```

Этот запрос группирует данные по отделам и возвращает общую сумму и максимальную зарплату для каждого отдела.

## Использование `HAVING` для фильтрации групп

Оператор `HAVING` используется для фильтрации данных после группировки (аналогично `WHERE`, но для агрегированных данных).

### Примеры

- **Отделы с общей зарплатой более 100,000**:

```sql
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department
HAVING SUM(salary) > 100000;
```

- **Средняя зарплата в отделах с числом сотрудников более 10**:

```sql
SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department
HAVING COUNT(*) > 10;
```

## Комбинирование нескольких агрегатных функций

Вы можете использовать несколько агрегатных функций в одном запросе.

### Пример

- **Минимальная, максимальная и средняя зарплата**:

```sql
SELECT MIN(salary) AS min_salary, MAX(salary) AS max_salary, AVG(salary) AS avg_salary
FROM employees;
```

## Особенности агрегатных функций

1. **Игнорирование `NULL`**: Большинство агрегатных функций (например, `SUM`, `AVG`, `MAX`, `MIN`) игнорируют строки с `NULL` в целевом столбце. Однако `COUNT(*)` учитывает все строки, включая те, где столбцы содержат `NULL`.
2. **Совместное использование с фильтрацией**: Для предварительной фильтрации данных используется оператор `WHERE`, а для фильтрации результатов группировки — `HAVING`.

Эти примеры дают вам полное понимание того, как работать с агрегатными функциями SQL и анализировать данные. 