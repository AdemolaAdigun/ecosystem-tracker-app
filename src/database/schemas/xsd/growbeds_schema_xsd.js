const growbedsSchemaXsd = '<?xml version="1.0" encoding="UTF-8" ?>' +
    '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">' +
    '' +
    '    <xs:complexType name="growbed-types">' +
    '        <xs:all>' +
    '            <xs:element name="lightIntensity">' +
    '               <xs:simpleType>' +
    '                   <xs:restriction base="xs:integer">' +
    '                       <xs:minExclusive value="100"/>' +
    '                       <xs:maxExclusive value="1000"/>' +
    '                   </xs:restriction>' +
    '               </xs:simpleType>' +
    '            </xs:element>' +
    '            <xs:element name="humidity">' +
    '               <xs:simpleType>' +
    '                   <xs:restriction base="xs:integer">' +
    '                       <xs:minExclusive value="0"/>' +
    '                       <xs:maxExclusive value="100"/>' +
    '                   </xs:restriction>' +
    '               </xs:simpleType>' +
    '            </xs:element>' +
    '            <xs:element name="pH">' +
    '               <xs:simpleType>' +
    '                   <xs:restriction base="xs:integer">' +
    '                       <xs:minExclusive value="0"/>' +
    '                       <xs:maxExclusive value="10"/>' +
    '                   </xs:restriction>' +
    '               </xs:simpleType>' +
    '            </xs:element>' +
    '            <xs:element name="water_level">' +
    '               <xs:simpleType>' +
    '                   <xs:restriction base="xs:integer">' +
    '                       <xs:minExclusive value="0"/>' +
    '                       <xs:maxExclusive value="100"/>' +
    '                   </xs:restriction>' +
    '               </xs:simpleType>' +
    '            </xs:element>' +
    '        </xs:all>' +
    '    </xs:complexType>' +
    '' +
    '    <xs:element name="growbed" type="growbed-types"/>' +
    '</xs:schema>';

module.exports = growbedsSchemaXsd;
