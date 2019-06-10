export const initialAssertion = {
    users: {
        name: "John",
        dashboards: {
            1: {
                stars: 2,
                comment: "two stars board",
            },
            2: {
                stars: 4,
                comment: "four stars board",
            },
            7: {
                stars: 99,
                comment: "this is probably misstaken",
            },
        },
    },
};

export const fixedStars = {
    users: {
        name: "John",
        dashboards: {
            1: {
                stars: 2,
                comment: "two stars board",
            },
            2: {
                stars: 4,
                comment: "four stars board",
            },
            7: {
                stars: 5,
                comment: "this is probably misstaken",
            },
        },
    },
};

export const fixedComment = {
    users: {
        name: "John",
        dashboards: {
            1: {
                stars: 2,
                comment: "two stars board",
            },
            2: {
                stars: 4,
                comment: "four stars board",
            },
            7: {
                stars: 5,
                comment: "now it's ok=)",
            },
        },
    },
};

export const resultAssertion = {
    users: {
        name: "John",
        dashboards: {
            1: {
                stars: 2,
                comment: "two stars board",
            },
            2: {
                stars: 4,
                comment: "four stars board",
            },
            7: {
                stars: 5,
                comment: "now it's ok=)",
            },
            66: {
              stars: 10,
              comment: "controllerActionWorksAsWell",
            },
        },
    },
};
