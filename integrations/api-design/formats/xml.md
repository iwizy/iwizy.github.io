---
sidebar_position: 2
slug: /api-design/formats/xml
---

# XML/XSD

## Что такое XML (eXtensible Markup Language)?

**XML** — это язык разметки, предназначенный для представления и обмена структурированными данными между системами. Он предоставляет разработчику возможность создавать собственные теги для описания данных, обеспечивая гибкость и универсальность.

### Основные характеристики XML

1. **Деревовидная структура данных**: 
   - Все данные организованы в форме дерева, где один элемент (корневой) содержит дочерние элементы.
2. **Произвольные имена тегов**:
   - Разработчик сам определяет названия элементов и атрибутов, например `<title>`, `<author>`, `<price>`.
3. **Атрибуты**:
   - Атрибуты описывают свойства элементов, например: `<price currency="USD">15.99</price>`.
4. **Читаемость**:
   - Формат XML читаем как человеком, так и машиной.

### Простой пример XML-документа

```xml
<?xml version="1.0" encoding="UTF-8"?>
<library>
    <book id="101">
        <title>To Kill a Mockingbird</title>
        <author>Harper Lee</author>
        <price currency="USD">18.99</price>
    </book>
    <book id="102">
        <title>War and Peace</title>
        <author>Leo Tolstoy</author>
        <price currency="EUR">22.50</price>
    </book>
</library>
```

## Что такое XSD (XML Schema Definition)?

**XSD** — это язык для описания структуры XML-документов. Он определяет, какие элементы и атрибуты допустимы, их типы данных, порядок и вложенность. XSD помогает обеспечить строгую валидацию XML.

### Основные функции XSD

1. **Описание структуры**:
   - Указывает, какие элементы являются обязательными, какие вложены и в каком порядке.
2. **Типизация данных**:
   - Определяет тип данных для элементов и атрибутов (например, строки, числа, даты).
3. **Ограничения**:
   - Позволяет задавать ограничения, например: минимальное и максимальное значение чисел, длина строк.
4. **Расширяемость**:
   - Поддержка модульности (включение и импорт других схем).

## Пример XSD-схемы

Для описанного выше XML-документа можно написать следующую XSD-схему:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <!-- Корневой элемент -->
    <xs:element name="library">
        <xs:complexType>
            <xs:sequence>
                <!-- Элемент book может встречаться несколько раз -->
                <xs:element name="book" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <!-- Вложенные элементы -->
                            <xs:element name="title" type="xs:string"/>
                            <xs:element name="author" type="xs:string"/>
                            <xs:element name="price">
                                <xs:complexType>
                                    <xs:simpleContent>
                                        <xs:extension base="xs:decimal">
                                            <!-- Атрибут currency -->
                                            <xs:attribute name="currency" type="xs:string" use="required"/>
                                        </xs:extension>
                                    </xs:simpleContent>
                                </xs:complexType>
                            </xs:element>
                        </xs:sequence>
                        <!-- Атрибут id -->
                        <xs:attribute name="id" type="xs:integer" use="required"/>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

</xs:schema>
```

## Особенности XML и XSD

### Особенности XML

- **Гибкость**:
  - Пользователь сам задает структуру данных.
- **Форматированный текст**:
  - Удобен для передачи и хранения.
- **Никакой встроенной валидации**:
  - Нет автоматического контроля за структурой или содержимым.

### Особенности XSD

- **Строгость**:
  - Определяет правила для всех элементов и атрибутов.
- **Типы данных**:
  - Позволяет задавать типы (например, `xs:integer`, `xs:date`).
- **Возможности расширения**:
  - Поддерживает модульность (включение других XSD).

## Более сложный пример

**XML-документ**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<company>
    <employee id="001">
        <name>John Doe</name>
        <position>Manager</position>
        <salary currency="USD">75000</salary>
    </employee>
    <employee id="002">
        <name>Jane Smith</name>
        <position>Engineer</position>
        <salary currency="EUR">62000</salary>
    </employee>
</company>
```

**XSD-схема**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="company">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="employee" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="name" type="xs:string"/>
                            <xs:element name="position" type="xs:string"/>
                            <xs:element name="salary">
                                <xs:complexType>
                                    <xs:simpleContent>
                                        <xs:extension base="xs:decimal">
                                            <xs:attribute name="currency" type="xs:string" use="required"/>
                                        </xs:extension>
                                    </xs:simpleContent>
                                </xs:complexType>
                            </xs:element>
                        </xs:sequence>
                        <xs:attribute name="id" type="xs:string" use="required"/>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

## Когда использовать XML и XSD?

- **XML**:
  - Хранение данных, их обмен между системами.
  - Когда структура не требует строгих правил.
- **XSD**:
  - Для обеспечения строгой проверки структуры XML.
  - Для описания сложных данных с типами и ограничениями.
