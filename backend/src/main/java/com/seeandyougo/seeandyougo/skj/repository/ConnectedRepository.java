package com.seeandyougo.seeandyougo.skj.repository;

import com.seeandyougo.seeandyougo.skj.table.Connected;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ConnectedRepository {
    private final EntityManager em;

    public void save(Connected connected){em.persist(connected);}

    public List<Connected> findRecent(String restaurantName){
        TypedQuery<Connected> query = em.createQuery(
                "SELECT ct FROM ConnectedTable ct WHERE ct.time = (SELECT MAX(ct2.time) FROM ConnectedTable ct2 WHERE ct2.name = :name)",
                Connected.class
        );

        query.setParameter("name", restaurantName);

        return query.getResultList();
    }

}
