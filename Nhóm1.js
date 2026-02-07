
// Mở form
document.getElementById('show-contact-form').onclick = (e) => {
    e.preventDefault();
    document.getElementById('contact-form').style.display = 'block';
    document.getElementById('overlay-bg').style.display = 'block';
};

// Hàm đóng form chung
function closeForm() {
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('overlay-bg').style.display = 'none';
}

// Đóng khi click vào nền đen (Overlay)
document.getElementById('overlay-bg').onclick = closeForm;

// Đóng khi click vào nút X (Mới thêm)
document.getElementById('close-form-btn').onclick = closeForm;
let clickCount = 0;

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        clickCount++;

        if (clickCount === 1) {
            alert("Ồ bạn đang cố truy cập menu bằng chuột phải à? cố gắng lần sau :)");
        } else if (clickCount === 2) {
            alert("Thử dùng F12 hoặc Ctrl+Shift+I để mở DevTools nhé! :)) ");
        } else if (clickCount === 3) {
            alert("Đừng cố gắng nữa,...");}
            else if (clickCount >= 4) {
                alert("...");
            // Hoặc xóa sạch nội dung trang web để không cho xem nữa
            document.body.innerHTML = "<h1 style='text-align:center; margin-top:20%; color:red;'>TRANG WEB ĐÃ BỊ KHÓA DO CỐ CLICK CHUỘT PHẢI!</h1>";
        }
    });

    // Vẫn giữ chặn phím tắt F12 như trước
    document.onkeydown = function(e) {
        // Chặn F12
        if (e.keyCode == 123) {
            return false;
        }
        // Chặn Ctrl+Shift+I (Inspect)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        // Chặn Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        // Chặn Ctrl+U (Xem nguồn trang)
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    };
    async function updateWeather() {
    try {
        // Sử dụng API lấy thời tiết Hà Nội miễn phí
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=21.0285&longitude=105.8542&current_weather=true');
        const data = await response.json();
        const temp = Math.round(data.current_weather.temperature);
        
        document.getElementById('current-temp').innerText = temp + '°C';
        
        // Thay đổi icon dựa trên nhiệt độ
        const iconEl = document.getElementById('weather-icon');
        if (temp > 30) iconEl.innerText = '☀️';
        else if (temp < 20) iconEl.innerText = '❄️';
        else iconEl.innerText = '☁️';
    } catch (error) {
        console.log("Không lấy được thời tiết");
    }
}

async function updateWeather() {
    try {
        // Sử dụng API lấy thời tiết Hà Nội miễn phí
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=21.0285&longitude=105.8542&current_weather=true');
        const data = await response.json();
        const temp = Math.round(data.current_weather.temperature);
        
        document.getElementById('current-temp').innerText = temp + '°C';
        
        // Thay đổi icon dựa trên nhiệt độ
        const iconEl = document.getElementById('weather-icon');
        if (temp > 30) iconEl.innerText = '☀️';
        else if (temp < 20) iconEl.innerText = '❄️';
        else iconEl.innerText = '☁️';
    } catch (error) {
        console.log("Không lấy được thời tiết");
    }
}

function startDigitalSystems() {
    function updateClock() {
        const now = new Date();
        // Ngày dd/mm/yyyy
        const d = String(now.getDate()).padStart(2, '0');
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const y = now.getFullYear();
        
        document.getElementById('current-date').innerText = `📅 ${d}/${m}/${y}`;
        document.getElementById('current-time').innerText = `⏰ ${now.toLocaleTimeString('vi-VN', { hour12: false })}`;
    }

    // Cập nhật đồng hồ mỗi giây
    setInterval(updateClock, 1000);
    updateClock();

    // Cập nhật thời tiết mỗi 30 phút (để tiết kiệm dữ liệu)
    updateWeather();
    setInterval(updateWeather, 1800000);
}

document.addEventListener('DOMContentLoaded', startDigitalSystems);