document.addEventListener('DOMContentLoaded', function () {
    const sidebarButtons = document.querySelectorAll('.tab-button');
    const contentContainer = document.querySelector('main.content');

    sidebarButtons.forEach(button => {
        button.addEventListener('click', function () {
            const blogId = this.getAttribute('data-blog');
            fetchBlogContent(blogId);
        });
    });

    function fetchBlogContent(blogId) {
        const blogs = [
            {
                id: 1,
                title: 'How I started helping people look for work',
                content: `<p>Helping individuals find employment is a challenge many face daily. When I moved to Canada with my family in 2000 as a mom of four, the hurdles seemed insurmountable. With no education, skills, work experience, vehicle, or driver’s license, making ends meet on $500 was a struggle. The absence of a support system compounded the difficulty, leaving me unsure of where to begin</p>
                        <strong>Overcoming Barriers</strong>. I applied for welfare at the Cowichan Tribes Band Office to meet our needs but faced setbacks in securing employment, such as a failed application at Superstore. Feeling devastated and lost, I realized I needed to take action. Despite challenges, including initial difficulty accessing education funding, I enrolled in free computer classes and later pursued volunteer opportunities as an office clerk.
                        <p><strong>Education and Progress</strong>. After a year, I obtained my status and membership, a pivotal moment that led to full funding for my post-secondary education through the Band. Over six years, I completed my studies while gaining valuable work experience during summer time
                        <p> My journey from adversity to achievement ignited my passion for helping others navigate similar challenges. Now employed as an Employment Counsellor at Cowichan Tribes Social Development, I bring firsthand understanding and empathy to support individuals in their quest for meaningful work. I believe in the power of perseverance and the transformative impact of guidance and support.
                        <p>To anyone struggling with their career path: Don't give up on your dreams. Reach out for support, and remember, you never know where your journey will take you. Have faith and believe in yourself.
`,
                image:  "images/my children.png"
            },
            {
                id: 2,
                title: 'Who I Helped look for Work',
                content: `<p>For over 15 years, I've been dedicated to supporting members of the Individual Opportunities Program (IOP), which assists those on Income Assistance on reserve. My role as an Advisor is driven by a deep passion for helping individuals find their path to educational and employment success.
                        <p> <strong>Making a Difference</strong>. Despite the challenges, seeing our members leave with a smile after our conversations is incredibly rewarding. Knowing I've played a role in transforming their lives fills me with joy and reaffirms my commitment to being a trustworthy guide.
                         <p><strong>Encouragement and Inspiration</strong>. Building strong relationships is fundamental to my approach. I strive to connect deeply with each client, understanding their unique needs and aspirations. Through encouragement and genuine support, I aim to inspire positive change and foster a sense of hope and determination in every individual.
                         <p><strong>Opening Doors</strong>. The IOP isn't just about finding a job; it's about opening doors of opportunity for those willing to embrace change. My mantra is simple yet powerful: "Believe in yourself. Don’t give up. Every step, no matter how small, leads to a beautiful destination. Guiding them on their journey to success, because when one door closes, another opens.

`,
                image: "images/IOP.jpg" 
            },
            {
                id: 3,
                title: 'Successes',
                content: `<p>Throughout my career, I've had the privilege of empowering First Nations clients, fostering their motivation, and guiding them toward meaningful employment. Over the years, I've supported approximately 500 members, continuously striving to provide opportunities and support for their professional growth.
                          <p><strong>Strategies Employed</strong>. I tailor my interventions to each individual's unique background and challenges, respecting their experiences and values while setting realistic goals. Genuine empathy and patience underpin my approach, ensuring I never give up on anyone. Continuously evolving, I maintain current knowledge of best practices in my field, always assessing and refining the effectiveness of my services.
                          <p><strong>Achievements</strong>. I've implemented programs aimed at developing essential soft skills like communication, commitment, reliability, and motivation among clients. Through hands-on activities and summer programs, income assistance clients have gained transferable skills crucial for transitioning into the workforce. Many have successfully secured employment, some after decades of dependence on assistance, now proud earners supporting their families.
                          <p><strong>Collaborative Efforts</strong>. Our department collaborates closely with Cowichan Tribes and external organizations within the Cowichan Valley, enhancing our ability to support clients effectively.
                          <p><strong>Reflections on Impact</strong>. The Individual Opportunities Program (IOP) has been instrumental in helping clients break out of their comfort zones, instilling hope and inspiration. Witnessing their growth has been immensely fulfilling; many have moved on to achieve personal and professional success. Building trust and relationships remains central to my approach, nurturing and guiding each client toward independence at their own pace. It's a journey that requires time and dedication, but the rewards are profoundly satisfying.

.`,
                image: "images/IOP1.png"
                
            }
        ];

        const blog = blogs.find(b => b.id == blogId);

        contentContainer.innerHTML = `
            <article class="blog-post">
                <h2>${blog.title}</h2>
                <img src="${blog.image}" alt="${blog.title}">
                <p>${blog.content}</p>
            </article>
            <section class="comment-section">
                <h3>Leave a Comment</h3>
                <input type="text" id="comment-input" placeholder="Enter your comment">
                <button id="submit-comment">Submit</button>
                <div class="comments"></div>
            </section>
        `;

        document.getElementById('submit-comment').addEventListener('click', function () {
            const comment = document.getElementById('comment-input').value;
            if (comment) {
                const commentDiv = document.createElement('div');
                commentDiv.textContent = comment;
                document.querySelector('.comments').appendChild(commentDiv);
                document.getElementById('comment-input').value = '';
                alert('Thank you for reading my blog!');
            }
        });
    }
});
