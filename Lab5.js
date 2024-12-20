let rowCount = 0;
let mathTotal = 0;
let englishTotal = 0;

function addGrade() {
    // 獲取輸入框的值
    const mathInput = document.getElementById('math');
    const englishInput = document.getElementById('english');

    const math = parseFloat(mathInput.value);
    const english = parseFloat(englishInput.value);

    // 驗證輸入是否合法
    if (isNaN(math) || isNaN(english)) {
        alert('Please enter valid numbers for both Math and English.');
        return;
    }

    // 計算平均分
    const average = ((math + english) / 2).toFixed(2);

    // 增加表格中的新行
    const tableBody = document.querySelector('#gradesTable tbody');
    const newRow = document.createElement('tr');

    rowCount++;
    mathTotal += math;
    englishTotal += english;

    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${average}</td>
    `;

    tableBody.appendChild(newRow);
    updateAverages();

    // 清空輸入框
    mathInput.value = '';
    englishInput.value = '';
}

function updateAverages() {
    // 計算欄位平均
    const mathAverage = (mathTotal / rowCount).toFixed(2);
    const englishAverage = (englishTotal / rowCount).toFixed(2);
    const totalAverage = ((mathTotal + englishTotal) / (rowCount * 2)).toFixed(2);

    // 更新頁腳的平均分
    document.getElementById('mathAverage').textContent = mathAverage;
    document.getElementById('englishAverage').textContent = englishAverage;
    document.getElementById('totalAverage').textContent = totalAverage;
}
