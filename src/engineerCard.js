function engineerCard (Engineer) {
    `
    <div class="col s4">
    <div class="card cyan lighten-3">
        <div class="card content teal lighten-5 center-align">
            <h2 class="padding-top card-title"> ${Engineer.name} </h2>
            <h5 class='padding-bot'><span class="icon icons"><i class="fas fa-briefcase"></i> </h5>
        </div>
        <div class="card-content">
            <div class="card-content">
                <span>ID ${Engineer.id}</span>
            </div>
            <div class="card-content">
                <span>Email:<a class='black-text' href='mailto:tom@gmail.com'> ${Engineer.email}</a></span>
            </div>
            <div class="card-content">
                <span>GitHub Information: ${Engineer.github}</span>
            </div>
        </div>
    </div>
</div> 
    `
};
module.exports = engineerCard;