package com.seeandyougo.seeandyougo.skj.repository;

import com.seeandyougo.seeandyougo.skj.table.RawWifi;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class RawWifiRepository {
    private final EntityManager em;

    public void save(RawWifi json){em.persist(json);}

    public RawWifi findOne(Long id){return em.find(RawWifi.class, id);}

    public List<RawWifi> findAll(){
        return em.createQuery("select r from RawWifi r", RawWifi.class)
                .getResultList();
    }

    public void deleteAll(){
        em.createQuery("DELETE FROM RawWifi").executeUpdate();
    }

}
