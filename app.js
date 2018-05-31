 //json coppied for github, Can't set up local server there
new Vue({
    el: '#vue-app',
    data: {
        prevButtonActive: 'true',
        sortedColumn: 'id',
        sortDirection: 'asc',
        currentPage: 1,
        elementsOnPage: 5,

        items: [{
          //import json from './DANE.json' doesn't work
                "id": 1,
                "firstName": "Jan",
                "lastName": "Kowalski",
                "dateOfBirth": "1.7.1990 11:35",
                "company": "XSolve",
                "note": 90
            },
            {
                "id": 4,
                "firstName": "Justyna",
                "lastName": "Kowalska",
                "dateOfBirth": "4.02.1976 14:37",
                "company": "XSolve",
                "note": 91
            },
            {
                "id": 2,
                "firstName": "Krzysztof",
                "lastName": "Krawczyk",
                "dateOfBirth": "28.10.1950 2:15",
                "company": "Chilid",
                "note": 27
            },
            {
                "id": 3,
                "firstName": "Bogusław",
                "lastName": "Linda",
                "dateOfBirth": "03.01.1963 23:10",
                "company": "XSolve",
                "note": 50
            },
            {
                "id": 5,
                "firstName": "Krzysztof",
                "lastName": "Kononowicz",
                "dateOfBirth": "10.10.1910 18:00",
                "company": "Chilid",
                "note": 77
            },
            {
                "id": 6,
                "firstName": "Maryla",
                "lastName": "Rodowicz",
                "dateOfBirth": "29.02.1936 11:35",
                "company": "XSolve",
                "note": 8
            },

            {
                "id": 7,
                "firstName": "Edyta",
                "lastName": "Górniak",
                "dateOfBirth": "14.11.1972 06:35",
                "company": "XSolve",
                "note": 25
            },
            {
                "id": 8,
                "firstName": "Dawid",
                "lastName": "Podsiadło",
                "dateOfBirth": "23.05.1993 16:15",
                "company": "Chilid",
                "note": 19
            },
            {
                "id": 9,
                "firstName": "Elvis",
                "lastName": "Presley",
                "dateOfBirth": "09.01.1935 01:35",
                "company": "XSolve",
                "note": 8
            }
          ]},
  
    created: function() {
        for (x in this.items) {
            let a = this.items[x].dateOfBirth;
            this.items[x].dateOfBirth = a.split(' ');
            a = this.items[x].dateOfBirth.pop();
            this.items[x].dateOfBirth = this.items[x].dateOfBirth.toString().split('.').reverse();
        }
    },
  
    methods: {
        directionSortingFlipper: function(temp) {
            if (temp === this.sortedColumn) {
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            }
            this.sortedColumn = temp;
        },
        nextPage: function() {
            if ((this.currentPage * this.elementsOnPage) < this.items.length) this.currentPage++;
        },
        prevPage: function() {
            if (this.currentPage > 1) this.currentPage--;
        },
        setPage: function(pageNumber) {
            return this.currentPage = pageNumber;
        },
        dateChange: function(item) {
            switch (item.dateOfBirth[1]) {
                case '1':
                case '01':
                    item.dateOfBirth[1] = 'Styczeń'
                    break;
                case '2':
                case '02':
                    item.dateOfBirth[1] = 'Luty'
                    break;
                case '3':
                case '03':
                    item.dateOfBirth[1] = 'Marzec'
                    break;
                case '4':
                case '04':
                    item.dateOfBirth[1] = 'Kwiecień'
                    break;
                case '5':
                case '05':
                    item.dateOfBirth[1] = 'Maj'
                    break;
                case '6':
                case '06':
                    item.dateOfBirth[1] = 'Czerwiec'
                    break;
                case '7':
                case '07':
                    item.dateOfBirth[1] = 'Lipiec'
                    break;
                case '8':
                case '08':
                    item.dateOfBirth[1] = 'Sierpień'
                    break;
                case '9':
                case '09':
                    item.dateOfBirth[1] = 'Wrzesień'
                    break;
                case '10':
                    item.dateOfBirth[1] = 'Październik'
                    break;
                case '11':
                    item.dateOfBirth[1] = 'Listopad'
                    break;
                case '12':
                    item.dateOfBirth[1] = 'Grudzień'
            }
            return item.dateOfBirth.join(' ');
        }
    },
  
    computed: {
        sortingByColumn: function() {
            return this.items.sort((a, b) => {
                let modifier = 1;
                if (this.sortDirection === 'desc') modifier = -1;
                if (a[this.sortedColumn] < b[this.sortedColumn]) return -1 * modifier;
                if (a[this.sortedColumn] > b[this.sortedColumn]) return 1 * modifier;
                return 0;

            }).filter((row, index) => {
                let start = (this.currentPage - 1) * this.elementsOnPage;
                let end = this.currentPage * this.elementsOnPage;
                if (index >= start && index < end) return true;
            });
        }
    }
});