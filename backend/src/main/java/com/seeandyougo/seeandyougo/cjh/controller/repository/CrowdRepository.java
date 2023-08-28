package com.seeandyougo.seeandyougo.cjh.controller.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CrowdRepository {

    private final JdbcTemplate jdbcTemplate;

    public CrowdRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int[] callData(String resName) {
        String connectedSql = "SELECT connected FROM connected_table WHERE name = ? ORDER BY time DESC LIMIT 1";
        String capacitySql = "SELECT connected FROM CAPACITY WHERE name = ?";

        Integer connectedUsers = jdbcTemplate.queryForObject(capacitySql, new Object[]{resName}, Integer.class);
        Integer totalCapacity = jdbcTemplate.queryForObject(connectedSql, new Object[]{resName}, Integer.class);

        int[] result = {connectedUsers, totalCapacity};
        return result;
    }
}