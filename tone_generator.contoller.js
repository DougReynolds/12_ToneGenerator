(function () {
    'use strict';

    var DIMENSION = 12;
    var OFFSET = 11;
    var matrix = [];

    /**
     * Creates a randomly generated 12-tone row
     */
    function calculateOriginalRow() {
        //var arr = [0,11,7,8,3,1,2,10,6,5,4,9];
        var arr = [];
        while(arr.length < DIMENSION){
            var randomnumber = Math.floor(Math.random()*DIMENSION);
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }
        populateOriginRow(arr);

        // calculate the 1st inversion column
        arr.forEach(function(interval, i) {
            if (i < OFFSET) {
                var val = calculateColumnBox(arr[i+1]);
                var tempArr = [];
                tempArr.push(val);
                populateOriginRow(tempArr);
            }
        });
        populateMatrix();
    }

    /**
     * Populates the origin row
     *
     * @param {array} row - The origin row array
     */
    function populateOriginRow(row) {
        matrix.push(row);
    }

    /**
     * Populates the matrix rows
     */
    function populateMatrix() {
        // primary row
        matrix.forEach(function(row, i) {
            matrix[1][i]    = calculateInversionRow(matrix[0][i] + matrix[1][0]);
            matrix[2][i]    = calculateInversionRow(matrix[0][i] + matrix[2][0]);
            matrix[3][i]    = calculateInversionRow(matrix[0][i] + matrix[3][0]);
            matrix[4][i]    = calculateInversionRow(matrix[0][i] + matrix[4][0]);
            matrix[5][i]    = calculateInversionRow(matrix[0][i] + matrix[5][0]);
            matrix[6][i]    = calculateInversionRow(matrix[0][i] + matrix[6][0]);
            matrix[7][i]    = calculateInversionRow(matrix[0][i] + matrix[7][0]);
            matrix[8][i]    = calculateInversionRow(matrix[0][i] + matrix[8][0]);
            matrix[9][i]    = calculateInversionRow(matrix[0][i] + matrix[9][0]);
            matrix[10][i]   = calculateInversionRow(matrix[0][i] + matrix[10][0]);
            matrix[11][i]   = calculateInversionRow(matrix[0][i] + matrix[11][0]);
        });

        console.log(matrix);
    }

    /**
     * Calulates the values for the Inversion rows, if the value is > OFFSET (11)
     *   The DIMENSION value is subtracted from the returnVal
     *
     * @param {Number} value - the maatrix value
     * @return {Number} retVal - the calculated return value.
     */
    function calculateInversionRow(value) {
        var retVal = value;
        if (retVal > OFFSET) {
            retVal = retVal - DIMENSION;
        }
        return retVal;
    }

    /**
     * Calulates the values for the column boxes rows, if the value is > OFFSET (11)
     *   The DIMENSION value is subtracted from the returnVal
     *
     * @param {Number} value - the maatrix value
     * @return {Number} retVal - the calculated return value.
     */
    function calculateColumnBox(value) {
        var retVal = DIMENSION - value;
        if (retVal > OFFSET) {
            retVal = retVal - DIMENSION;
        }
        return retVal;
    }

    calculateOriginalRow();
})();