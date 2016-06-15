﻿/*
    *
    * Wijmo Library 5.20161.154
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
/*
 * Wijmo culture file: ro (Romanian)
 */
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            numberFormat: {
                '.': ',',
                ',': '.',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: 'RON', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
                daysAbbr: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
                months: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
                monthsAbbr: ['ian.', 'feb.', 'mar.', 'apr.', 'mai', 'iun.', 'iul.', 'aug.', 'sept.', 'oct.', 'nov.', 'dec.'],
                am: ['a.m.', 'a'],
                pm: ['p.m.', 'p'],
                eras: ['d.Hr.'],
                patterns: {
                    d: 'dd.MM.yyyy', D: 'dddd, d MMMM yyyy',
                    f: 'dddd, d MMMM yyyy HH:mm', F: 'dddd, d MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM yyyy', Y: 'MMMM yyyy',
                    g: 'dd.MM.yyyy HH:mm', G: 'dd.MM.yyyy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                },
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} articole selectat'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} articole)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Crescător',
            descending: '\u2193 Descrescător',
            apply: 'Aplicare',
            clear: 'Golire',
            conditions: 'Filtrare după stare',
            values: 'Filtrare după valoare',
            // value filter
            search: 'Căutare',
            selectAll: 'Selectare totală',
            null: '(nimic)',
            // condition filter
            header: 'Indică articolele unde valoarea',
            and: 'Și',
            or: 'Sau',
            stringOperators: [
                { name: '(nu este setat)', op: null },
                { name: 'Este egal cu', op: 0 },
                { name: 'Nu este egal cu', op: 1 },
                { name: 'Începe cu', op: 6 },
                { name: 'Se încheie cu', op: 7 },
                { name: 'Conține', op: 8 },
                { name: 'Nu conține', op: 9 }
            ],
            numberOperators: [
                { name: '(nu este setat)', op: null },
                { name: 'Este egal cu', op: 0 },
                { name: 'Nu este egal cu', op: 1 },
                { name: 'Este mai mare decât', op: 2 },
                { name: 'Este mai mare decât sau egală cu', op: 3 },
                { name: 'Este mai mică decât', op: 4 },
                { name: 'Este mai mică decât sau egală cu', op: 5 }
            ],
            dateOperators: [
                { name: '(nu este setat)', op: null },
                { name: 'Este egal cu', op: 0 },
                { name: 'Este înainte de', op: 4 },
                { name: 'Este după', op: 3 }
            ],
            booleanOperators: [
                { name: '(nu este setat)', op: null },
                { name: 'Este egal cu', op: 0 },
                { name: 'Nu este egal cu', op: 1 }
            ]
        },
        olap: {
            PivotFieldEditor: {
                dialogHeader: 'Field settings:',
                header: 'Header:',
                summary: 'Summary:',
                showAs: 'Show As:',
                weighBy: 'Weigh by:',
                sort: 'Sort:',
                filter: 'Filter:',
                format: 'Format:',
                sample: 'Sample:',
                edit: 'Edit...',
                clear: 'Clear',
                ok: 'OK',
                cancel: 'Cancel',
                none: '(none)',
                sorts: {
                    asc: 'Ascending',
                    desc: 'Descending'
                },
                aggs: {
                    sum: 'Sum',
                    cnt: 'Count',
                    avg: 'Average',
                    max: 'Max',
                    min: 'Min',
                    rng: 'Range',
                    std: 'StdDev',
                    var: 'Var',
                    stdp: 'StdDevPop',
                    varp: 'VarPop'
                },
                calcs: {
                    noCalc: 'No Calculation',
                    dRow: 'Difference from previous row',
                    dRowPct: '% Difference from previous row',
                    dCol: 'Difference from previous column',
                    dColPct: '% Difference from previous column'
                },
                formats: {
                    n0: 'Integer (n0)',
                    n2: 'Float (n2)',
                    c: 'Currency (c)',
                    p0: 'Percentage (p0)',
                    p2: 'Percentage (p2)',
                    n2c: 'Thousands (n2,)',
                    n2cc: 'Millions (n2,,)',
                    n2ccc: 'Billions (n2,,,)',
                    d: 'Date (d)',
                    MMMMddyyyy: 'Month Day Year (MMMM dd, yyyy)',
                    dMyy: 'Day Month Year (d/M/yy)',
                    ddMyy: 'Day Month Year (dd/M/yy)',
                    dMyyyy: 'Day Month Year (dd/M/yyyy)',
                    MMMyyyy: 'Month Year (MMM yyyy)',
                    MMMMyyyy: 'Month Year (MMMM yyyy)',
                    yyyyQq: 'Year Quarter (yyyy "Q"q)',
                    FYEEEEQU: 'Fiscal Year Quarter ("FY"EEEE "Q"U)'
                }
            },
            PivotEngine: {
                grandTotal: 'Grand Total',
                subTotal: 'Subtotal'
            },
            PivotPanel: {
                fields: 'Choose fields to add to report',
                drag: 'Drag fields between areas below:',
                filters: 'Filters',
                cols: 'Columns',
                rows: 'Rows',
                vals: 'Values',
                defer: 'Defer Updates',
                update: 'Update'
            },
            _ListContextMenu: {
                up: 'Move Up',
                down: 'Move Down',
                first: 'Move do Beginning',
                last: 'Move to End',
                filter: 'Move to Report Filter',
                rows: 'Move to Row Labels',
                cols: 'Move to Column Labels',
                vals: 'Move to Values',
                remove: 'Remove Field',
                edit: 'Field Settings...',
                detail: 'Show Detail...'
            },
            PivotChart: {
                by: 'by',
                and: 'and'
            },
            DetailDialog: {
                header: 'Detail View:',
                ok: 'OK',
                items: '{cnt:n0} items',
                item: '{cnt} item',
                row: 'Row',
                col: 'Column'
            }
        }
    };
})(wijmo || (wijmo = {}));
;
//# sourceMappingURL=wijmo.culture.ro.js.map
