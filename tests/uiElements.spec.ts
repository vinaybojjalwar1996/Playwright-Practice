import{test,expect} from '@playwright/test'
test.beforeEach(async ({page})=>{
    await page.goto("http://localhost:4200/")
})


test.describe('UI elements',()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("http://localhost:4200/")
        await page.getByTitle('Forms').click()
        await page.getByTitle('Form Layouts').click()
    })
    
    test('',async({page})=>{
        
        const Elocator= await page.locator('nb-card').filter({hasText:"Using the Grid"}).getByLabel('Email')
        await Elocator.fill("vinay.bojjalwar@gmail.com")
    
        
    })
    test("Radio buttons",async ({page})=>{
        await page.locator('nb-card',{hasText:"Using the Grid"} ).getByText("Option 1").click()
        expect(await page.locator('nb-card',{hasText:"Using the Grid"} ).getByText("Option 1")).toBeTruthy
        expect(await page.locator('nb-card',{hasText:"Using the Grid"} ).getByText("Option 2")).toBeTruthy
    })
})

test("checkBoxes",async({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByTitle('Modal & Overlays').click()
    await page.getByTitle('Toastr').click()
    await page.locator(".label").filter({hasText:"Prevent arising of duplicate toast"}).check({force:true})

})
test("list and dropdown", async({page})=>{
    await page.locator("ngx-header nb-select").click()
    await page.locator("nb-option",{hasText:" Light"}).click()
    const element = page.locator('nb-layout-header');

    // Get the value of the CSS variable
    const linkTextColor = await element.evaluate(el => getComputedStyle(el).getPropertyValue('--card-background-color'));
    
    expect(linkTextColor).toBe('#ffffff'); 
    


})
test("tool tip", async({page})=>{
    await page.getByTitle('Modal & Overlays').click()
    await page.getByTitle('Tooltip').click()
    await page.locator(" nb-card button",{hasText:"Top"}).hover()
    const textContent=await page.locator("nbtooltip").textContent()
    console.log(textContent)


})
test("Dailog Boxes", async({page})=>{
    await page.getByTitle('Tables & Data').click()
    await page.getByTitle('Smart Table').click()
    
    page.on('dialog',dailog=>{
        console.log(dailog.message())
        dailog.accept()
    })
    await page.locator("tr",{hasText:"Mark"}).locator(".nb-trash").click()
})

test("Web Tables", async({page})=>{
    await page.getByTitle('Tables & Data').click()
    await page.getByTitle('Smart Table').click()
    await page.locator("li",{hasText:"3"}).click()
    await page.locator("tr",{hasText:"Cora"}).locator(".nb-edit").click()
    await page.locator("td").getByPlaceholder("Age").fill("10");
    await page.locator(".nb-checkmark").click()
    const x= await page.locator("td .ng-star-inserted").nth(12).textContent()
    expect(x).toEqual("10")

   
   
    


})
test("Date PIcker", async({page})=>{
    await page.getByTitle('Forms').click()
    await page.getByTitle('Datepicker').click()
    await page.getByPlaceholder("Form Picker").click()
    //await page.locator("nb-calendar-day-cell").getByText("8",{exact:true}).click()
    await page.locator("nb-calendar-view-mode").click()
    const dateData= await page.locator("nb-calendar").textContent()
    await page.locator("nb-calendar-year-cell",{hasText:" 2025 "}).click()






})
test("Date PIcker java", async({page})=>{
    await page.getByTitle('Forms').click()
    await page.getByTitle('Datepicker').click()
    await page.getByPlaceholder("Form Picker").click()
    let date= new Date()
    date.setDate(date.getDate() + 500)
    const expectedDate= date.getDate().toString()
    const expectedYear=date.getFullYear()
    const expectedMonth=date.getMonth()
    const formattedDate = `${expectedMonth} ${expectedYear}`;
    console.log(formattedDate)
    const expectedMonthShort = date.toLocaleString('En-US', {month: 'short'})
    const actualDate =await page.locator("nb-calendar-view-mode").textContent()
    console.log(actualDate)
  //  await page.locator('nb-calendar-day-cell').getByText(expectedDate,{exact:true}).click()



})
test("Slider", async({page})=>{
    const tempValue= page.locator('[tabtitle="Temperature"]  ngx-temperature-dragger circle')
    await tempValue.evaluate(node =>{
        node.setAttribute("cx","74.49")
        node.setAttribute("cy","26.55")
        
    })
    await tempValue.click()

})

test("Slider long method", async({page})=>{
    const tempBox= page.locator('[tabtitle="Temperature"]  ngx-temperature-dragger')
    await tempBox.scrollIntoViewIfNeeded()
    const box=await tempBox.boundingBox()
    const x =box.x+box?.width /2
    const y=box.y+box?.height/2
    await page.mouse.move(x,y)
    await page.mouse.down()
    await page.mouse.move(x+100,y)
    await page.mouse.move(x+100,y+100)

    await page.mouse.up()
    await expect(tempBox).toContainText("30")
    


    
})


