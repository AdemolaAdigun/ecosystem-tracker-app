const harvestsSchemaXsd = '<?xml version="1.0" encoding="UTF-8" ?>' +
    '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">' +
    '' +
    '    <xs:complexType name="harvest-types">' +
    '        <xs:all>' +
    '            <xs:element name="harvestSize" maxOccurs="1">' +
    '               <xs:simpleType>' +
    '                   <xs:restriction base="xs:integer">' +
    '                       <xs:minExclusive value="0"/>' +
    '                       <xs:maxInclusive value="500"/>' +
    '                   </xs:restriction>' +
    '               </xs:simpleType>' +
    '            </xs:element>' +
    '            <xs:element name="revenue" maxOccurs="1">' +
    '               <xs:simpleType>' +
    '                   <xs:restriction base="xs:integer">' +
    '                       <xs:minExclusive value="0"/>' +
    '                   </xs:restriction>' +
    '               </xs:simpleType>' +
    '            </xs:element>' +
    '        </xs:all>' +
    '    </xs:complexType>' +
    '' +
    '    <xs:element name="harvest" type="harvest-types"/>' +
    '</xs:schema>';

module.exports = harvestsSchemaXsd;
