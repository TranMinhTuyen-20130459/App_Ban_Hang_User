// Hàm để lấy dữ liệu từ API
export async function fetchDataMethodGET(apiUrl) {
    try {
        const response = await fetch(apiUrl);

        // TH: Không trả về dữ liệu
        if (!response.ok)
            throw new Error(`Error fetching data. Status: ${response.status}`);

        const data = await response.json();

        // console.log(data);

        return data;

    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

