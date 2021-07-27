import {MigrationInterface, QueryRunner} from "typeorm";

export class InitMigration1627374734358 implements MigrationInterface {
    name = 'InitMigration1627374734358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying(500) NOT NULL, "surname" text NOT NULL, "age" integer NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "hashedPassword" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
