const pondsSchemaXsd = '<?xml version="1.0" encoding="UTF-8" ?>' +
    '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">' +
    '' +
    '    <xs:complexType name="pond-types">' +
    '        <xs:all>' +
    '            <xs:element name="temperature">' +
    '               <xs:simpleType>' +
    '                   <xs:restriction base="xs:integer">' +
    '                       <xs:minInclusive value="20"/>' +
    '                       <xs:maxInclusive value="40"/>' +
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
    '    <xs:element name="pond" type="pond-types"/>' +
    '</xs:schema>';

module.exports = pondsSchemaXsd;
