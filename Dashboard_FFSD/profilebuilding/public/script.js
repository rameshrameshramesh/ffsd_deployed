const searchKeyword = async (keyword) => {
    try { console.log(keyword)
        const response = await fetch(`/search?keyword=${keyword}`);
        const data = await response.json();
        console.log(data);

        const buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.innerHTML = '';

        Object.keys(data).forEach(category => {
            const categoryData = data[category].filter(item => item !== null); // Filter out null values
            categoryData.forEach(item => {
                const button = document.createElement('button');
                button.textContent = item.jobTitle+''+item.location+item.workmode+''+item._id;
                button.onclick = () => {
                    // Redirect to the link URL when button is clicked
                    window.location.href = `/category/${item.category}/${item._id}`;
                } // You can change this to display any other relevant data
                buttonContainer.appendChild(button);
            });
        });
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
};
