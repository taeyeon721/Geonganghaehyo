# show databases;
# use springboot;

<<<<<<< HEAD
DROP TABLE IF EXISTS `manager`;

CREATE TABLE `manager` (
                           `email`	varchar(50)	NOT NULL,
                           `password`	varchar(100)	NOT NULL,
                           `gender`	varchar(10)	NULL,
                           `age`	int(200)	NULL,
                           `tel_no`	varchar(50)	NULL,
                           `name`	varchar(10)	NOT NULL,
                           `user_name`	varchar(10)	NOT NULL,
                           `role`	varchar(20)	NOT NULL
);

DROP TABLE IF EXISTS `gym`;

CREATE TABLE `gym` (
    `gym_name`	varchar(20)	NOT NULL
);

DROP TABLE IF EXISTS `gym_record`;

CREATE TABLE `gym_record` (
                              `gym_name`	varchar(20)	NOT NULL,
                              `email`	varchar(50)	NOT NULL,
                              `gym_date`	datetime	NULL
);

DROP TABLE IF EXISTS `accident_archive`;

CREATE TABLE `accident_archive` (
                                    `email`	varchar(50)	NOT NULL,
                                    `image_url`	varchar(50)	NULL,
                                    `accident_date`	datetime	NULL
);

DROP TABLE IF EXISTS `game_record`;

CREATE TABLE `game_record` (
                               `email`	varchar(50)	NOT NULL,
                               `game_name`	varchar(20)	NOT NULL,
                               `game_score`	int(100)	NULL
);

DROP TABLE IF EXISTS `game_list`;

CREATE TABLE `game_list` (
    `game_name`	varchar(20)	NOT NULL
);

DROP TABLE IF EXISTS `message`;

CREATE TABLE `message` (
                           `msg_id`	varchar(16)	NOT NULL,
                           `email`	varchar(50)	NOT NULL,
                           `isSound`	boolean	NULL,
                           `content`	text	NULL,
                           `created_date`	datetime	NULL
);

DROP TABLE IF EXISTS `user_quiz`;

CREATE TABLE `user_quiz` (
                             `email`	varchar(50)	NOT NULL,
                             `question`	varchar(50)	NOT NULL,
                             `answer`	varchar(50)	NOT NULL,
                             `decoy`	varchar(50)	NOT NULL,
                             `isImage`	boolean	NULL
);

DROP TABLE IF EXISTS `normal_quiz`;

CREATE TABLE `normal_quiz` (
                               `no`	int(100)	NOT NULL,
                               `question`	varchar(200)	NULL,
                               `answer`	varchar(50)	NULL,
                               `decoy`	varchar(50)	NULL,
                               `isImage`	boolean	NULL
);

DROP TABLE IF EXISTS `token`;

CREATE TABLE `token` (
                         `email`	varchar(50)	NOT NULL,
                         `refreshtoken`	varchar(500)	NOT NULL
);

ALTER TABLE `manager` ADD CONSTRAINT `PK_MANAGER` PRIMARY KEY (
                                                               `email`
    );

ALTER TABLE `gym` ADD CONSTRAINT `PK_GYM` PRIMARY KEY (
                                                       `gym_name`
    );

ALTER TABLE `gym_record` ADD CONSTRAINT `PK_GYM_RECORD` PRIMARY KEY (
                                                                     `gym_name`,
                                                                     `email`
    );

ALTER TABLE `accident_archive` ADD CONSTRAINT `PK_ACCIDENT_ARCHIVE` PRIMARY KEY (
                                                                                 `email`
    );

ALTER TABLE `game_record` ADD CONSTRAINT `PK_GAME_RECORD` PRIMARY KEY (
                                                                       `email`,
                                                                       `game_name`
    );

ALTER TABLE `game_list` ADD CONSTRAINT `PK_GAME_LIST` PRIMARY KEY (
                                                                   `game_name`
    );

ALTER TABLE `message` ADD CONSTRAINT `PK_MESSAGE` PRIMARY KEY (
                                                               `msg_id`,
                                                               `email`
    );

ALTER TABLE `user_quiz` ADD CONSTRAINT `PK_USER_QUIZ` PRIMARY KEY (
                                                                   `email`
    );

ALTER TABLE `normal_quiz` ADD CONSTRAINT `PK_NORMAL_QUIZ` PRIMARY KEY (
                                                                       `no`
    );

ALTER TABLE `token` ADD CONSTRAINT `PK_TOKEN` PRIMARY KEY (
                                                           `email`
    );

ALTER TABLE `gym_record` ADD CONSTRAINT `FK_gym_TO_gym_record_1` FOREIGN KEY (
                                                                              `gym_name`
    )
    REFERENCES `gym` (
                      `gym_name`
        );

ALTER TABLE `gym_record` ADD CONSTRAINT `FK_manager_TO_gym_record_1` FOREIGN KEY (
                                                                                  `email`
    )
    REFERENCES `manager` (
                          `email`
        );

ALTER TABLE `accident_archive` ADD CONSTRAINT `FK_manager_TO_accident_archive_1` FOREIGN KEY (
                                                                                              `email`
    )
    REFERENCES `manager` (
                          `email`
        );

ALTER TABLE `game_record` ADD CONSTRAINT `FK_manager_TO_game_record_1` FOREIGN KEY (
                                                                                    `email`
    )
    REFERENCES `manager` (
                          `email`
        );

ALTER TABLE `game_record` ADD CONSTRAINT `FK_game_list_TO_game_record_1` FOREIGN KEY (
                                                                                      `game_name`
    )
    REFERENCES `game_list` (
                            `game_name`
        );

ALTER TABLE `message` ADD CONSTRAINT `FK_manager_TO_message_1` FOREIGN KEY (
                                                                            `email`
    )
    REFERENCES `manager` (
                          `email`
        );

ALTER TABLE `user_quiz` ADD CONSTRAINT `FK_manager_TO_user_quiz_1` FOREIGN KEY (
                                                                                `email`
    )
    REFERENCES `manager` (
                          `email`
        );

ALTER TABLE `token` ADD CONSTRAINT `FK_manager_TO_token_1` FOREIGN KEY (
                                                                        `email`
    )
    REFERENCES `manager` (
                          `email`
        );
=======
DROP TABLE IF EXISTS guardian;

CREATE TABLE `guardian` (
	`email`	varchar(50)	NOT NULL,
	`password`	varchar(50)	NOT NULL,
	`gender`	varchar(10),
	`age`	int	NULL,
	`tel_no`	varchar(50)
);

# DROP TABLE IF EXISTS child-parent;

CREATE TABLE `child-parent` (
	`email`	varchar(50)	NOT NULL,
	`parent_id`	binary(16)	NOT NULL,
	`isLogined`	boolean
);

# DROP TABLE IF EXISTS gym;

CREATE TABLE `gym` (
	`gym_name` varchar(20)	NOT NULL
);

# DROP TABLE IF EXISTS gym_record;

CREATE TABLE `gym_record` (
	`gym_name`	varchar(20)	NOT NULL,
	`parent_id`	binary(16)	NOT NULL,
	`gym_date`	datetime	NULL
);

# DROP TABLE IF EXISTS parent;

CREATE TABLE `parent` (
	`parent_id`	binary(16)	NOT NULL,
	`parent_name`	varchar(20)	NULL,
	`parent_age`	int	NULL
);

# DROP TABLE IF EXISTS accident_archive;

CREATE TABLE `accident_archive` (
	`email`	varchar(50)	NOT NULL,
	`parent_id`	binary(16)	NOT NULL,
	`image_url`	varchar(50)	NULL,
	`accident_date`	datetime	NULL
);

# DROP TABLE IF EXISTS game_record;

CREATE TABLE `game_record` (
	`parent_id`	binary(16)	NOT NULL,
	`game_name`	varchar(20)	NOT NULL,
	`game_score`	int(100)	NULL
);

# DROP TABLE IF EXISTS game_list;

CREATE TABLE `game_list` (
	`game_name`	varchar(20)	NOT NULL
);

# DROP TABLE IF EXISTS message;

CREATE TABLE `message` (
	`email`	varchar(50)	NOT NULL,
	`parent_id`	binary(16)	NOT NULL,
	`direction`	boolean	NULL,
	`isSound`	boolean	NULL,
	`content`	text	NULL,
	`created_date`	datetime	NULL
);

# DROP TABLE IF EXISTS user_quiz;

CREATE TABLE `user_quiz` (
	`email`	varchar(50)	NOT NULL,
	`parent_id`	binary(16)	NOT NULL,
	`question`	varchar(50)	NOT NULL,
	`example_1`	varchar(50)	NOT NULL,
	`example_2`	varchar(50)	NOT NULL,
	`answer`	varchar(10)	NOT NULL,
	`isImage`	boolean	NULL,
	`Field`	VARCHAR(255)	NULL
);

# DROP TABLE IF EXISTS normal_quiz;

CREATE TABLE `normal_quiz` (
	`no`	int(100)	NOT NULL,
	`question`	varchar(200)	NULL,
	`example_1`	varchar(50)	NULL,
	`example_2`	varchar(50)	NULL,
	`answer`	varchar(10)	NULL,
	`isImage`	boolean
);

ALTER TABLE `guardian` ADD CONSTRAINT `PK_GUARDIAN` PRIMARY KEY (
	`email`
);

ALTER TABLE `child-parent` ADD CONSTRAINT `PK_CHILD-PARENT` PRIMARY KEY (
	`email`,
	`parent_id`
);

ALTER TABLE `gym` ADD CONSTRAINT `PK_GYM` PRIMARY KEY (
	`gym_name`
);

ALTER TABLE `gym_record` ADD CONSTRAINT `PK_GYM_RECORD` PRIMARY KEY (
	`gym_name`,
	`parent_id`
);

ALTER TABLE `parent` ADD CONSTRAINT `PK_PARENT` PRIMARY KEY (
	`parent_id`
);

ALTER TABLE `accident_archive` ADD CONSTRAINT `PK_ACCIDENT_ARCHIVE` PRIMARY KEY (
	`email`,
	`parent_id`
);

ALTER TABLE `game_record` ADD CONSTRAINT `PK_GAME_RECORD` PRIMARY KEY (
	`parent_id`,
	`game_name`
);

ALTER TABLE `game_list` ADD CONSTRAINT `PK_GAME_LIST` PRIMARY KEY (
	`game_name`
);

ALTER TABLE `message` ADD CONSTRAINT `PK_MESSAGE` PRIMARY KEY (
	`email`,
	`parent_id`
);

ALTER TABLE `user_quiz` ADD CONSTRAINT `PK_USER_QUIZ` PRIMARY KEY (
	`email`,
	`parent_id`
);

ALTER TABLE `normal_quiz` ADD CONSTRAINT `PK_NORMAL_QUIZ` PRIMARY KEY (
	`no`
);

ALTER TABLE `child-parent` ADD CONSTRAINT `FK_guardian_TO_child-parent_1` FOREIGN KEY (
	`email`
)
REFERENCES `guardian` (
	`email`
);

ALTER TABLE `child-parent` ADD CONSTRAINT `FK_parent_TO_child-parent_1` FOREIGN KEY (
	`parent_id`
)
REFERENCES `parent` (
	`parent_id`
);

ALTER TABLE `gym_record` ADD CONSTRAINT `FK_gym_TO_gym_record_1` FOREIGN KEY (
	`gym_name`
)
REFERENCES `gym` (
	`gym_name`
);

ALTER TABLE `gym_record` ADD CONSTRAINT `FK_parent_TO_gym_record_1` FOREIGN KEY (
	`parent_id`
)
REFERENCES `parent` (
	`parent_id`
);

ALTER TABLE `accident_archive` ADD CONSTRAINT `FK_child-parent_TO_accident_archive_1` FOREIGN KEY (
	`email`
)
REFERENCES `child-parent` (
	`email`
);

ALTER TABLE `accident_archive` ADD CONSTRAINT `FK_child-parent_TO_accident_archive_2` FOREIGN KEY (
	`parent_id`
)
REFERENCES `child-parent` (
	`parent_id`
);

ALTER TABLE `game_record` ADD CONSTRAINT `FK_parent_TO_game_record_1` FOREIGN KEY (
	`parent_id`
)
REFERENCES `parent` (
	`parent_id`
);

ALTER TABLE `game_record` ADD CONSTRAINT `FK_game_list_TO_game_record_1` FOREIGN KEY (
	`game_name`
)
REFERENCES `game_list` (
	`game_name`
);

ALTER TABLE `message` ADD CONSTRAINT `FK_child-parent_TO_message_1` FOREIGN KEY (
	`email`
)
REFERENCES `child-parent` (
	`email`
);

ALTER TABLE `message` ADD CONSTRAINT `FK_child-parent_TO_message_2` FOREIGN KEY (
	`parent_id`
)
REFERENCES `child-parent` (
	`parent_id`
);

ALTER TABLE `user_quiz` ADD CONSTRAINT `FK_child-parent_TO_user_quiz_1` FOREIGN KEY (
	`email`
)
REFERENCES `child-parent` (
	`email`
);

ALTER TABLE `user_quiz` ADD CONSTRAINT `FK_child-parent_TO_user_quiz_2` FOREIGN KEY (
	`parent_id`
)
REFERENCES `child-parent` (
	`parent_id`
);
>>>>>>> back-end-yja

