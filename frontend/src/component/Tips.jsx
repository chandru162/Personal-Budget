import React from 'react'
import '../css section/Tips.css'
export default function Tips() {
  return (
    <div>
      <div className="referenced-books">
        <h2>Referenced Books</h2>
        <h3>Free books avilable!</h3>
        <div className="book">
          <img src="https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fcontentcafecloud.baker-taylor.com%2FJacket.svc%2F687E8C19-A3BC-4C42-8417-3550389695CF%2F9780143136255%2FLarge%2FLogo&w=128&q=75" alt="Book 1" className="book-image"/>
            <div className="book-details">
              <h3>Finance for the people</h3>
            <p>Author:Paco de Leon</p>
              <p>Published: January 1, 2024</p>
            <a href="https://thehellyeahgroup.com/finance-for-the-people">open now</a>
            </div>
        </div>
        <div className="book">
          <img src="https://secure.syndetics.com/index.aspx?isbn=9781682688403/mc.gif&upc=&client=nyplvega&type=unbound" alt="Book 2" className="book-image"/>
            <div className="book-details">
            <h3>Ask questions, save money, make more </h3>
            <p>Author: Matt Schulz</p>
              <p>Published: February 1, 2024</p>
            <a href="https://www.goodreads.com/book/show/150778733-ask-questions-save-money-make-more">open now</a>
            </div>
        </div>
      </div>
      <div className="referenced-books">
        <div className="book">
          <img src="https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fcontentcafecloud.baker-taylor.com%2FJacket.svc%2F687E8C19-A3BC-4C42-8417-3550389695CF%2F9781506487571%2FLarge%2FLogo&w=128&q=75" alt="Book 1" className="book-image" />
          <div className="book-details">
            <h3>The Social Justice Investor</h3>
            <p>Author:Andrea Longton</p>
            <p>Published: January 8, 2024</p>
            <a href="https://www.thesocialjusticeinvestor.com/">open now</a>
          </div>
        </div>
        <div className="book">
          <img src="https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fcontentcafecloud.baker-taylor.com%2FJacket.svc%2F687E8C19-A3BC-4C42-8417-3550389695CF%2F9781250791696%2FLarge%2FLogo&w=128&q=75" alt="Book 2" className="book-image" />
          <div className="book-details">
            <h3>How to mony</h3>
            <p>Author: Matt Schulz</p>
            <p>Published: February 16, 2024</p>
            <a href="https://www.howtomoney.com/">open now</a>
          </div>
        </div>
      </div>

    </div>
  )
}
